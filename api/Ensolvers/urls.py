from django.urls import path,include
from . import views


urlpatterns = [
    
    path('data/', views.dataReception,name='dataReception'),
    path('csrf/', views.csrf,name='csrf'),
    
   
    # path('vender/',views.vender,name='vender'),
]
