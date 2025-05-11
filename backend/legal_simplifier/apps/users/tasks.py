from celery import shared_task
import requests
from django.conf import settings

@shared_task
def process_user_feedback(feedback_data):
    # Logic to process user feedback
    # This could involve saving feedback to the database or sending it to an external service
    pass

@shared_task
def notify_user_of_changes(user_id, changes):
    # Logic to notify users about changes related to their documents or accounts
    # This could involve sending an email or a push notification
    pass

@shared_task
def fetch_user_data_from_external_service(user_id):
    # Example of fetching user data from an external service
    response = requests.get(f"{settings.EXTERNAL_SERVICE_URL}/users/{user_id}")
    if response.status_code == 200:
        return response.json()
    return None