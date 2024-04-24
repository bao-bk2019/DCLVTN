from rest_framework import serializers 
from UserApi.models import User
 
 
class UserSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = User
        fields = ('user_id',
                  'first_name',
                  'last_name',
                  'password',
                  'email',
                  'phone_number')
        

class FileUploadSerializer(serializers.Serializer):
    file = serializers.FileField()