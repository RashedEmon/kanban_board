from rest_framework import serializers
from datetime import datetime

class Task:
    def __init__(self,id,title,status,description,date_created=None) -> None:
        self.id = id,
        self.title=title,
        self.status=status,
        self.description = description,
        self.date_created=date_created or datetime.now()

class TaskSerializer(serializers.Serializer):
    id=serializers.CharField(max_length=50)
    title=serializers.CharField(max_length=200)
    status=serializers.CharField(max_length=50)
    description = serializers.CharField(max_length=2000)
    date_created = serializers.DateTimeField()
