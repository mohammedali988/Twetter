# Generated by Django 3.1.4 on 2020-12-29 18:20

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('twitter', '0009_auto_20201229_2119'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tweet',
            name='tweet_date',
            field=models.DateTimeField(verbose_name=datetime.datetime(2020, 12, 29, 18, 20, 12, 41806, tzinfo=utc)),
        ),
    ]
