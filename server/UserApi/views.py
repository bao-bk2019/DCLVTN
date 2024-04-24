from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser , MultiPartParser

from UserApi.models import User
from UserApi.serializers import UserSerializer, FileUploadSerializer
from rest_framework.decorators import api_view

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from io import BytesIO

from minio import Minio



@api_view(['GET', 'POST', 'DELETE'])
def user_list(request):
    # GET list of tutorials, POST a new tutorial, DELETE all tutorials
    if request.method == "POST":
        user_data = JSONParser().parse(request)
        user_serializer = UserSerializer(data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse(user_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        user = User.objects.all()
        user_serializer = UserSerializer(user, many=True)
        return JsonResponse(user_serializer.data, safe=False)
    

# Create your views here.
# @api_view(['GET', 'POST', 'DELETE'])
# def upload(request):
#     if request.method == "POST":
#         print(MultiPartParser.parse(request))
#         return JsonResponse("success", safe=False, status=status.HTTP_200_OK)


    
@api_view(['GET'])
def predict(request):
    if request.method == "GET":
        print(request.GET.get("feature", ""))
        return Response({"predict_value" : 30}, status=status.HTTP_200_OK)
        # feature = request.GET['date']
        # target = request.GET['target']
        # window_size = request.GET['window_size']
        # lag_size = request.GET['lag_size']
        # condition = True # DO check condition
        # if condition:
        #     # Do forecasting
        #     predict_value = 13
        #     return Response("\{predict_value : 13}\}", status=status.HTTP_200_OK)
        # else:
        #     return Response("error", status=status.HTTP_406_NOT_ACCEPTABLE)