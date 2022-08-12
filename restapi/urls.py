from django.contrib import admin
from django.urls import path,include
from .views import gettask,addtask,remove_task

urlpatterns = [
    path('task/get/', gettask),
    path('task/add/', addtask),
    path('task/remove/<str:id>', remove_task),
]
