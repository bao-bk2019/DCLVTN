from django.urls import re_path, path
from DataApi import views
 
urlpatterns = [ 

    re_path(r'^api/user/data$',views.upload),
    re_path(r'^api/user/data-column$', views.get_columns),
    re_path(r'^api/user/descriptive-analysis$', views.descriptive),
    re_path(r'^api/user/rfm$', views.rfm),
]   