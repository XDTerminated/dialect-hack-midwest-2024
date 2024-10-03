# bedrockapp/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('call-bedrock/', views.call_bedrock_api, name='call_bedrock'),  # Define the correct path here
]
