# Generated by Django 3.1.4 on 2020-12-29 17:46

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('twitter', '0002_auto_20201229_2036'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='post',
            options={'ordering': ['userpost']},
        ),
        migrations.AlterField(
            model_name='tweet',
            name='tweet_date',
            field=models.DateTimeField(verbose_name=datetime.datetime(2020, 12, 29, 17, 46, 54, 36442, tzinfo=utc)),
        ),
    ]
