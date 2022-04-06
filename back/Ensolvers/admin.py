from django.contrib import admin
from .models import TodoList
# Register your models here.

class TodoListAdmin(admin.ModelAdmin):
    list_display = ("title","completed")


admin.site.register(TodoList,TodoListAdmin)

