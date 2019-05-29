import json
import logging
import os
import time
import uuid

import boto3
dynamodb = boto3.resource('dynamodb')


def create(event, context):
    data = json.loads(event['body'])
    required = ['title','checked','company', 'skills', 'description', 'logo', 'type', 'jobUrl']

    if not any(key in data for key in required):
        logging.error("Validation Failed")
        raise Exception("Couldn't create the job item.")
        return

    timestamp = int(time.time() * 1000)

    table = dynamodb.Table(os.environ['DYNAMODB_TABLE'])

    item = {
        'id': str(uuid.uuid1()),
        'title': data['title'],
        'company': data['company'],
        'logo': data['logo'],
        'skills': data['skills'],
        'description': data['description'],
        'type': data['type'],
        'jobUrl': data['jobUrl'],
        'checked': False,
        'createdAt': timestamp,
        'updatedAt': timestamp,
    }

    table.put_item(Item=item)

    response = {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin" : "*"
        },
        "body": json.dumps(item)
    }

    return response
