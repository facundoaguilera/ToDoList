# Generated by Django 4.0.2 on 2022-04-06 14:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Ensolvers', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='todolist',
            options={'verbose_name': 'titulo', 'verbose_name_plural': 'titulos'},
        ),
        migrations.AddField(
            model_name='todolist',
            name='completada',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='todolist',
            name='titulo',
            field=models.CharField(default='SOME TITLE', max_length=120),
        ),
    ]
