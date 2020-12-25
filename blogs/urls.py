
from django.urls import path, include

from blogs import views

urlpatterns = [

    path('', views.all_blogs, name='all_blogs'),

]