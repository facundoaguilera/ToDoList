from django.db import models
from numpy import False_

# Create your models here.
class TodoList(models.Model):
    title=models.CharField(max_length=120, default='SOME TITLE')
    completed=models.BooleanField(default=False)

    class Meta: #la clase Meta dentro de los modelos especifica lo que son los datos Meta de nuestras clases
        verbose_name='Task' #sirve para especificar el nombre del modelo dentro de la base de datos como los campos
        verbose_name_plural='Taks'

    def __str__(self): #para que nos devuelva el nombre del servicio
        return self.title

   

