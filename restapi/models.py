from django.db import models

# Create your models here.

class Task(models.Model):
    id=models.CharField(max_length=50,primary_key=True)
    title=models.CharField(max_length=200)
    status=models.CharField(max_length=50)
    description = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    

    