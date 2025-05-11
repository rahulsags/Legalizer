from django.urls import path
from .views import DocumentUploadView, DocumentSimplificationView, FeedbackView

urlpatterns = [
    path('upload/', DocumentUploadView.as_view(), name='document-upload'),
    path('simplify/<int:document_id>/', DocumentSimplificationView.as_view(), name='document-simplify'),
    path('feedback/<int:document_id>/', FeedbackView.as_view(), name='document-feedback'),
]