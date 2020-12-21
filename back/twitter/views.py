from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView 
from .models import tweet, comment, users, test
from .serializer import tweetser, commentser, userser,testser
from rest_framework.response import Response
from django.contrib.auth.models import User
# Create your views here.

class Test(APIView):
    print("hiiii")
    serializer_class = testser
    def post(self, request):
        serializer = testser( data= request.data)
        print(serializer)
        if serializer.is_valid(raise_exception=True): 
            serializer.save()
            return Response(True)

class tweetView(APIView):

    serializer_class = tweetser
    def get (self, request):
        tweets = [ {"tweet_text": tweets.tweet_text,"tweet_date": tweets.tweet_date, "tweet_id":tweets.tweet_id}  
        for tweets in tweet.objects.all()] 
        return Response(tweets)
            

    def post(self, request):
        serializer = tweetser( data= request.data)
        print(serializer)
        if serializer.is_valid(raise_exception=True): 
            serializer.save()
            return Response(True)
    

class commentView(APIView):
    serializer_class = commentser

    def get (self, request):
        comments = [ {"comment_text": comments.comment_text,"comment_date": comments.comment_date, "comment_id":comments.comment_id}  
        for comments in comment.objects.all()] 
        return Response(comments)

    def post(self,request):
        serializer = commentser(data = request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(True)

class UsersView(APIView):
    serializer_class = userser

    def post(self, request):
        serializer = userser(data=request.data)
        if serializer.is_valid (raise_exception = True):
            serializer.save()
            return Response(True)