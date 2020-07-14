import json
import time
import logging
import os

from jobs import decimalencoder
import boto3
dynamodb = boto3.resource('dynamodb')


def update(event, context):
    data = json.loads(event['body'])
    required = ['title','checked','company', 'skills', 'description', 'logo', 'type']

    if not any(key in data for key in required):
        logging.error("Validation Failed")
        raise Exception("Couldn't update the job item.")
        return

    timestamp = int(time.time() * 1000)

    table = dynamodb.Table(os.environ['DYNAMODB_TABLE'])

    result = table.update_item(
        Key={
            'id': event['pathParameters']['id']
        },
        ExpressionAttributeNames={
          '#job_title': 'title',
        },
        ExpressionAttributeValues={
          ':title': data['title'],
          ':checked': data['checked'],
          ':company': data['company'],
          ':skills': data['skills'],
          ':description': data['description'],
          ':jobUrl': data['jobUrl'],
          ':updatedAt': timestamp,
        },
        UpdateExpression='SET #job_title = :title, '
                         'checked = :checked, '
                         'company = :company, '
                         'skills = :skills, '
                         'description = :description, '
                         'jobUrl = :jobUrl, '
                         'updatedAt = :updatedAt',
        ReturnValues='ALL_NEW',
    )
    
    response = {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin" : "*"
        },
        "body": json.dumps(result['Attributes'],
                           cls=decimalencoder.DecimalEncoder)
    }

    return response
