from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView 
from .models import tweet, comment, users, test
from .serializer import tweetser, commentser, userser,testser, LogIn
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model, authenticate
# from django.contrib.auth import authenticate
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

# class UsersView(APIView):
#     serializer_class = userser

#     def post(self, request):
#         serializer = userser(data= request.data)
#         let = users.objects.filter(username="memo", userPass="memo")
#         arr = users.objects.all() 
#         if let[0] in arr :
#             return Response(True) 
#         else:
#             return Response(False)

#     def get (self, request):
#         user = [ {"username": user.username }  
#         for user in users.objects.all()]
#         return Response(user) 

#     def post(self, request):
#         serializer = userser(data=request.data)
#         print(request.data)
#         if serializer.is_valid (raise_exception = True):
#             serializer.save()
#             return Response("hi")

class CreateUser (APIView):
    serializer_class = userser

    def post(self, request):
        serializer = userser(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = User.objects.create_user(
                request.data['username'], request.data['userEmali'], request.data['userPass'])
            user.save()
            print(request.data)
            return Response(True)
    
    def get(self, request):
        User = get_user_model()
        users = User.objects.all()
        print(users)
        return Response( users.values_list('username', flat=True))



class LogIn(APIView):
    serializer_class = LogIn 

    def post (self, request):
        user = authenticate(username=request.data['username'], password=request.data['userPass'])
        if user is not None:
            return Response(True)
        else:return Response(False)







        # serializer = LogIn(data=request.data)
        # print(request.data,"hereeeeeeeeeeeeeeeeeeeeeeeeeeeee")
        # if User.objects.filter(username=request.data['userEmali']) .exists():
        #     return Response(True)
        # return Response(False)