# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-11-19 04:02
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('songs', '0013_auto_20171117_2041'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lyric',
            name='title',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]