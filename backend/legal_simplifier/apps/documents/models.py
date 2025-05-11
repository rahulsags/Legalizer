from django.db import models

class LegalDocument(models.Model):
    original_text = models.TextField()
    simplified_text = models.TextField(blank=True, null=True)
    risk_level = models.CharField(max_length=50, choices=[
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High'),
    ], default='low')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Document {self.id} - Risk Level: {self.risk_level}"