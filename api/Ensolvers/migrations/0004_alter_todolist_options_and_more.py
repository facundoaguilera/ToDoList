# Generated by Django 4.0.2 on 2022-04-06 17:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Ensolvers', '0003_alter_todolist_options'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='todolist',
            options={'verbose_name': 'Task', 'verbose_name_plural': 'Taks'},
        ),
        migrations.RenameField(
            model_name='todolist',
            old_name='completada',
            new_name='completed',
        ),
        migrations.RenameField(
            model_name='todolist',
            old_name='titulo',
            new_name='title',
        ),
    ]
