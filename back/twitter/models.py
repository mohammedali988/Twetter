from django.db import models
import pytz
from datetime import datetime
# Create your models here.



class Photo(models.Model):
    photo1 = models.ImageField(upload_to=None)


class tweet (models.Model):
    tweet_text = models.CharField(max_length=300)
    tweet_id = models.CharField(max_length=50)


class users(models.Model):
    userEmali = models.EmailField(max_length=254)
    username = models.CharField(max_length=50)
    userPass = models.CharField(max_length=50)


class comm(models.Model):
    comm_text = models.CharField(max_length=250)
    comm_id = models.CharField(max_length=50)





