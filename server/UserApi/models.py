from django.db import models

# Create your models here.
class User(models.Model):
    user_id = models.CharField(max_length=30, primary_key=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30)
    password = models.CharField(max_length=24)
    email = models.CharField(max_length=30)
    phone_number = models.CharField(max_length=10)


