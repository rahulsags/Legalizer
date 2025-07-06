# Legalizer - LLM Based Legal Document Summarizer and Doubt Solver

Legalizer is an innovative application designed to assist users in summarizing legal documents and answering legal queries using advanced language models. The application provides a user-friendly interface for interacting with the AI, allowing users to upload documents and engage in meaningful conversations regarding legal matters.

## Features

- **Document Summarization**: Users can upload PDF or image files, which are processed to extract text and summarized using the Groq LLM model.
- **Legal Query Assistance**: Users can chat with the AI to get answers to their legal questions, making it a valuable tool for both legal professionals and individuals seeking legal information.
- **User-Friendly Interface**: The application is designed with a clean and colorful UI to enhance user experience.

## Project Structure

```
legalizer
├── src
│   ├── app.py                # Main application file
│   ├── static
│   │   ├── css
│   │   │   └── styles.css    # CSS styles for the application
│   ├── templates
│   │   ├── index.html        # Landing page template
│   │   └── chat.html         # Chat interface template
├── requirements.txt          # Python dependencies
└── README.md                 # Project documentation
```

## Installation

To set up the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd legalizer
   ```

2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

3. Set up your environment variables, including the `GROQ_API_KEY`.

## Usage

1. Start the Flask application:
   ```
   python src/app.py
   ```

2. Open your web browser and navigate to `http://127.0.0.1:5000` to access the landing page.

3. Click on the "Chat Now" button to enter the chat interface, where you can upload documents and interact with the AI.

## Contributors

- [Your Name](https://github.com/yourprofile) - Project Lead
- [Contributor Name](https://github.com/contributorprofile) - Developer
- [Contributor Name](https://github.com/contributorprofile) - Designer

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.