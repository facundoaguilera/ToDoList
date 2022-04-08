#!/bin/bash
echo Ejecutando Servidor
DJANGODIR=$(cd `dirname $0` && pwd)
DJANGO_SETTINGS_MODULE=EnsolversDjango.settings
export DJANGO_SETTINGS_MODULE=$DJANGO_SETTINGS_MODULE
export PYTHONPATH=$DJANGODIR:$PYTHONPATH
exec python manage.py runserver 0:8000
