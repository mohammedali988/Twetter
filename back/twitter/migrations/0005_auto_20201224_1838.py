# Generated by Django 3.1.4 on 2020-12-24 15:38

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('twitter', '0004_auto_20201219_1953'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='comment_date',
            field=models.DateTimeField(verbose_name=datetime.datetime(2020, 12, 24, 15, 38, 58, 906193, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='tweet',
            name='tweet_date',
            field=models.DateTimeField(verbose_name=datetime.datetime(2020, 12, 24, 15, 38, 58, 906193, tzinfo=utc)),
        ),
    ]