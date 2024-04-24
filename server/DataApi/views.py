from django.shortcuts import render
from rest_framework import status
from rest_framework import status
from io import BytesIO
from rest_framework.response import Response
from rest_framework.decorators import api_view

from minio import Minio

import pandas as pd

MINIO_ACCESS_KEY="P3sjX5cy7fgvk1iF"
MINIO_SECRET_KEY="kc0dONVrPT4dtBc4cleAfKGqm3m8iwWp"

minio_client = Minio(
    endpoint="localhost:9000",
    access_key=MINIO_ACCESS_KEY,
    secret_key=MINIO_SECRET_KEY,
    secure=False
)

# Create your views here.
@api_view(['POST'])
def upload(request):
    if request.method == "POST":
        file = request.FILES.get('file')  # Access the uploaded file
        if file is not None:
            # Process the file (send it to Trino, save it, etc.)
            # Example:
            value_as_bytes = file.read()
            value_as_a_stream = BytesIO(value_as_bytes)
            minio_client.put_object("csv", "output.csv", data=value_as_a_stream, length=len(value_as_bytes))
            return Response("File uploaded successfully", status=status.HTTP_200_OK)
        else:
            return Response("No file uploaded", status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response("Method not allowed", status=status.HTTP_405_METHOD_NOT_ALLOWED)
    

def read_data():
    df = pd.read_csv(f"s3://csv/output.csv",
                    storage_options={
                        "key": MINIO_ACCESS_KEY,
                        "secret": MINIO_SECRET_KEY,
                        "client_kwargs": {"endpoint_url": "http://localhost:9000/"}
                    })
    return df

@api_view(['GET'])
def get_columns(request):
    if request.method == "GET":
        df = read_data()
        metric_columns = []
        nomiinal_columns = []
        for i in df.columns:
            if "int" in str(df[i].dtype):
                metric_columns += [i]
            else:
                nomiinal_columns += [i]
        respone = {"metric": metric_columns, "nominal": nomiinal_columns}
        return Response(respone, status=status.HTTP_202_ACCEPTED)