from rest_framework import serializers 
from .models import tweet, users,  comm, Photo

# class testser(serializers.ModelSerializer):
#     class Meta:
#         model = test
#         fields = ["photo"] 


class Photoser(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ["photo1"] 


class tweetser (serializers.ModelSerializer):
    class Meta: 
        model = tweet 
        fields = ['tweet_text','tweet_id'] 

class commentser(serializers.ModelSerializer):
    class Meta :
        model = comm
        fields = [ 'comm_text', 'comm_id']

class userser(serializers.ModelSerializer):
    class Meta:
        model = users
        fields =['userEmali', 'username', 'userPass']

class LogIn (serializers.ModelSerializer):
    class Meta : 
        model = users
        fields = ['username', 'userPass']


