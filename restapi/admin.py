from django.contrib import admin


# Register your models here.

from restapi.models import Task


class TaskAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'status')


admin.site.register(Task, TaskAdmin)
