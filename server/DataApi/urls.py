from django.urls import re_path, path
from DataApi import views
 
urlpatterns = [ 

    re_path(r'^api/upload$',views.upload),
    re_path(r'^api/get_columns$', views.get_columns)
]