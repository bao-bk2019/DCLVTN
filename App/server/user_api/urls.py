# urls.py
from django.urls import path
from .views import LoginAPIView, LogoutAPIView,RegisterUserAPIView,UserView

urlpatterns = [
    path('login/', LoginAPIView.as_view(), name='login'),
    path('logout/', LogoutAPIView.as_view(), name='logout'),
    path('register/', RegisterUserAPIView.as_view(), name='register_user'),
    path('user/', UserView.as_view(), name='user'),
]
