from rest_framework import serializers 
from .models import tweet, comment, users, test

class testser(serializers.ModelSerializer):
    class Meta:
        model = test
        fields = ["text"] 

class tweetser (serializers.ModelSerializer):
    class Meta: 
        model = tweet 
        fields = ['tweet_text', 'tweet_date' ,'tweet_id'] 

class commentser(serializers.ModelSerializer):
    class Meta :
        model = comment
        fields = [ 'comment_text', 'comment_date', 'comment_id']

class userser(serializers.ModelSerializer):
    class Meta:
        model = users
        fields =['userEmali', 'username', 'userPass']

class LogIn (serializers.ModelSerializer):
    class Meta : 
        model = users
        fields = ['username', 'userPass']