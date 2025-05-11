from django.core.wsgi import get_wsgi_application
import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'legal_simplifier.settings')

application = get_wsgi_application()