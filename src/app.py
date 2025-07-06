from flask import Flask, render_template, request, jsonify
import os
from werkzeug.utils import secure_filename
from groq import Groq
from PyPDF2 import PdfReader
from PIL import Image
import easyocr
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads/'
app.config['ALLOWED_EXTENSIONS'] = {'pdf', 'png', 'jpg', 'jpeg'}

client = Groq(
    api_key=os.environ.get("GROQ_API_KEY"),
)

reader = easyocr.Reader(['en'])

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['GET', 'POST'])
def chat():
    if request.method == 'POST':
        if 'file' in request.files:
            file = request.files['file']
            if file.filename == '':
                return jsonify({'error': 'No selected file'})
            if file and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
                # Create the uploads directory if it doesn't exist
                os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
                file.save(file_path)
                summary = summarize_file(file_path)
                return jsonify({'summary': summary})
        elif 'message' in request.form:
            user_message = request.form['message']
            response = chat_with_ai(user_message)
            return jsonify({'response': response})

    return render_template('chat.html')

def summarize_file(file_path):
    text_content = extract_text(file_path)
    batches = split_into_batches(text_content, 20000)
    summaries = []
    for batch in batches:
        chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": f"Summarize the following content: {batch}",
                }
            ],
            model="llama-3.3-70b-versatile",
        )
        summaries.append(chat_completion.choices[0].message.content)
    return " ".join(summaries)

def split_into_batches(text, max_words):
    words = text.split()
    for i in range(0, len(words), max_words):
        yield " ".join(words[i:i + max_words])

def extract_text(file_path):
    ext = file_path.rsplit('.', 1)[1].lower()
    if ext == 'pdf':
        return extract_text_from_pdf(file_path)
    elif ext in {'png', 'jpg', 'jpeg'}:
        return extract_text_from_image(file_path)
    return ""

def extract_text_from_pdf(file_path):
    text = ""
    with open(file_path, 'rb') as file:
        reader = PdfReader(file)
        for page in reader.pages:
            text += page.extract_text()
    return text

def extract_text_from_image(file_path):
    image = Image.open(file_path)
    result = reader.readtext(image, detail=0)
    return " ".join(result)

def chat_with_ai(user_message):
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": user_message,
            }
        ],
        model="llama-3.3-70b-versatile",
    )
    return chat_completion.choices[0].message.content

if __name__ == '__main__':
    app.run(debug=True)