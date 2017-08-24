# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-22 21:02
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='track',
            name='info',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='info',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='composer',
            name='info',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='lyric',
            name='info',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='song',
            name='info',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='writer',
            name='info',
            field=models.TextField(blank=True, null=True),
        ),
    ]