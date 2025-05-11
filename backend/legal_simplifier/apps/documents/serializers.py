from rest_framework import serializers
from ..models import Document

class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ['id', 'original_text', 'simplified_text', 'risk_level', 'created_at', 'updated_at']