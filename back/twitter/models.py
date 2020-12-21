from django.db import models
import pytz
from datetime import datetime
# Create your models here.

class test(models.Model):
    text = models.CharField(max_length=20)

class tweet (models.Model):
    tweet_text = models.CharField(max_length=300)
    tweet_date = models.DateTimeField(datetime.now(pytz.utc))
    tweet_id = models.IntegerField(default=0)


class comment(models.Model):
    comment_text = models.CharField(max_length=300)
    comment_date = models.DateTimeField(datetime.now(pytz.utc))
    comment_id = models.IntegerField(default=0)

class users(models.Model):
    userEmali = models.EmailField(max_length=254)
    username = models.CharField(max_length=50)
    userPass = models.CharField(max_length=50)
