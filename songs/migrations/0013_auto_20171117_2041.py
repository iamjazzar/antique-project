# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-11-17 20:41
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('songs', '0012_auto_20171117_1940'),
    ]

    operations = [
        migrations.AddField(
            model_name='lyric',
            name='down_votes',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='lyric',
            name='up_votes',
            field=models.IntegerField(default=0),
        ),
    ]