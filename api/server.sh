#!/bin/bash
echo Ejecutando Servidor
DJANGODIR=$(cd `dirname $0` && pwd)
DJANGO_SETTINGS_MODULE=EnsolversDjango.settings
source env/Scripts/activate
export DJANGO_SETTINGS_MODULE=$DJANGO_SETTINGS_MODULE
export PYTHONPATH=$DJANGODIR:$PYTHONPATH
python manage.py runserver 
