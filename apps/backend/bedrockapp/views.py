from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from mistralai import Mistral
from dotenv import load_dotenv
import os

load_dotenv()


@csrf_exempt
def call_bedrock_api(request):
    mistral_api_key = os.getenv("MISTRAL_API_KEY")

    if request.method == "OPTIONS":
        response = JsonResponse({})
        response["Access-Control-Allow-Origin"] = "https://dialect-hazel.vercel.app"
        response["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
        response["Access-Control-Allow-Headers"] = "Content-Type"
        return response

    if not mistral_api_key:
        response = JsonResponse(
            {"error": "MISTRAL_API_KEY not found in environment variables"}, status=500
        )
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
        response["Access-Control-Allow-Headers"] = "Content-Type"
        return response

    prompt = request.GET.get("prompt", "")

    client = Mistral(api_key=mistral_api_key)
    model = "mistral-large-latest"

    messages = [
        {
            "role": "system",
            "content": "You are a translating machine. The user will always give you a request formatted as 'Translate [text] from [language or personality 1] to [language or personality 2].'...",
        },
        {"role": "user", "content": prompt},
    ]

    chat_response = client.chat.complete(model=model, messages=messages)
    body = chat_response.choices[0].message.content

    response = JsonResponse({"response": body})
    response["Access-Control-Allow-Origin"] = "https://dialect-hazel.vercel.app"
    response["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    response["Access-Control-Allow-Headers"] = "Content-Type"
    return response
