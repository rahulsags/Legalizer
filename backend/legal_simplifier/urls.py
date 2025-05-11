from django.urls import path, include

urlpatterns = [
    path('documents/', include('legal_simplifier.apps.documents.urls')),
    path('users/', include('legal_simplifier.apps.users.urls')),
]