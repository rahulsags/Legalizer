from celery import shared_task
import requests
from .models import Document

@shared_task
def process_document(document_id):
    document = Document.objects.get(id=document_id)
    original_text = document.content

    # Call Groq Cloud LLM API to simplify the document
    response = requests.post(
        'https://api.groq.cloud/simplify',
        json={'text': original_text}
    )

    if response.status_code == 200:
        simplified_text = response.json().get('simplified_text')
        risk_levels = response.json().get('risk_levels')

        # Update the document with simplified text and risk levels
        document.simplified_content = simplified_text
        document.risk_levels = risk_levels
        document.save()
    else:
        # Handle API error
        document.simplified_content = "Error processing document."
        document.save()