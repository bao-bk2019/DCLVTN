from rest_framework import serializers
from django.contrib.auth import get_user_model

UserModel = get_user_model()

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
class UserSerializer(serializers.ModelSerializer):
    #password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user = UserModel.objects.create_user(**validated_data)
        return user
    class Meta:
        model = UserModel
        fields = ('id', 'password', 'email', 'date_joined', 'female')
        extra_kwargs = {"password": {"write_only": True}}