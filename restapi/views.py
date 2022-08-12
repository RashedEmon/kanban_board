from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .serializers import TaskSerializer, Task
from .models import Task
import json

# Create your views here.

# api/task/get/


@csrf_exempt
@api_view(['GET'])
def gettask(request):
    rt = None
    taskserializer = None
    if request.method == 'GET':
        tasks = Task.objects.all()
        taskList = []

        for task in tasks:
            taskList.append(
                Task(task.id, task.title, task.status, task.description))
        taskserializer = TaskSerializer(taskList, many=True)
        if taskserializer:
            print(json.dumps(taskserializer.data))
    else:
        return JsonResponse(data={"message": "method not supported"})
    return Response(taskserializer.data, status=status.HTTP_200_OK, content_type="text/json")

# api/task/add/


@csrf_exempt
def addtask(request):
    data = {}
    if request.method == 'POST':
        json_data = json.loads(request.body)
        print(type(json_data))
        for item in json_data:
            data = {
                'id': item['id'],
                'title': item['title'],
                'status': item['status'],
                'description': item['description']
            }
            res = Task.objects.update_or_create(id=item['id'],
                                                defaults=data)
        data['message'] = "updated successfully"
    else:
        data['message'] = "method not supported"
    return JsonResponse(data=data)


# task/remove/<str:id>
@csrf_exempt
@api_view(['GET'])
def remove_task(request, id):
    data = {}
    print(id)
    if request.method == 'GET':
        t = Task.objects.filter(id=id)
        if t.exists():
            t.delete()
            data['message'] = "removed"
        else:
            data['message'] = "not found"
    else:
        data['message'] = "method not supported"
    return JsonResponse(data=data)
