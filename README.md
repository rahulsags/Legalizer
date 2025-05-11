# Legal Document Simplifier

This project is a web-based Legal Document Simplifier that allows users to upload legal documents (contracts, agreements, policies) and receive simplified explanations while highlighting key clauses and potential risks.

## Tech Stack

- **Backend**: Django
- **Frontend**: React.js
- **Database**: MongoDB
- **LLM**: Groq Cloud LLM

## Features

- Upload PDF or text-based legal documents.
- Simplified explanations of legal text while preserving key meanings.
- Highlighting of important clauses and risk levels.
- User feedback mechanism for generated text.

## Installation

### Backend

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install the required Python packages:
   ```
   pip install -r requirements.txt
   ```

3. Run the Django server:
   ```
   python manage.py runserver
   ```

### Frontend

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install the required Node.js packages:
   ```
   npm install
   ```

3. Start the React application:
   ```
   npm start
   ```

## Usage

1. Open your web browser and go to `http://localhost:3000`.
2. Use the upload feature to submit your legal documents.
3. View the simplified text alongside the original document.
4. Provide feedback on the generated text to improve the system.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.