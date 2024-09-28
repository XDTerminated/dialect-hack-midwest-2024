# bedrockapp/views.py

from django.http import JsonResponse
import boto3
import json

def call_bedrock_api(request):
    bedrock_runtime = boto3.client('bedrock-runtime', region_name='us-west-2')
    prompt = request.GET.get('prompt', '')
    
    kwargs = {
        "modelId": "anthropic.claude-3-sonnet-20240229-v1:0",
        "contentType": "application/json",
        "accept": "application/json",
        "body": json.dumps({
            "anthropic_version": "bedrock-2023-05-31",
            "max_tokens": 1000,
            "messages": [
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": prompt
                        }
                    ]
                }
            ]
        })
    }
    
    response = bedrock_runtime.invoke_model(**kwargs)
    body = json.loads(response['body'].read())

    return JsonResponse(body)
