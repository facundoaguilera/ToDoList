from django.http import HttpRequest, HttpResponse,JsonResponse
from django.shortcuts import render
from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import TodoList

# Create your views here.
@csrf_exempt
def dataReception(request):
    if request.method=='POST':
        datos=request.DATA
        print(datos)
    return JsonResponse({"datos":datos})

def csrf(request):
    return JsonResponse({'csrfToken': get_token(request)})

class TodoListView(viewsets.ModelViewSet):
    serializer_class= TodoSerializer
    queryset = TodoList.objects.all()