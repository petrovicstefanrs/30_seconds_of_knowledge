import os

import boto3
dynamodb = boto3.resource('dynamodb')


def delete(event, context):
    table = dynamodb.Table(os.environ['DYNAMODB_TABLE'])

    table.delete_item(
        Key={
            'id': event['pathParameters']['id']
        }
    )

    response = {
        "headers": {
            "Access-Control-Allow-Origin" : "*"
        },
        "statusCode": 200
    }

    return response
