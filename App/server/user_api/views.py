from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from django.contrib.auth import authenticate, login, logout
from .serializers import LoginSerializer, UserSerializer

class LoginAPIView(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = authenticate(username=email, password=password)
            if user is not None:
                login(request, user)
                return Response({"message": "Đăng nhập thành công."}, status=status.HTTP_200_OK)
            else:
                return Response({"message": "Tên đăng nhập hoặc mật khẩu không đúng."}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class LogoutAPIView(APIView):

    permission_classes = (permissions.AllowAny,)
    def post(self, request):
        logout(request)
        return Response({"message": "Đăng xuất thành công."}, status=status.HTTP_200_OK)
class RegisterUserAPIView(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class UserView(APIView):
	permission_classes = (permissions.IsAuthenticated,)
	# authentication_classes = (SessionAuthentication,)
	##
	def get(self, request):
		serializer = UserSerializer(request.user)
		return Response({'user': serializer.data}, status=status.HTTP_200_OK)
