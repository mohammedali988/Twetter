from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView 
from .models import tweet, users, comm, Photo
from .serializer import tweetser, userser, LogIn, commentser, Photoser
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model, authenticate
# Create your views here.

# class Test(APIView):
#     serializer_class = testser
#     def post(self, request):
#         serializer = testser( data= request.data)
#         if serializer.is_valid(raise_exception=True): 
#             serializer.save()
#             return Response(True)

class Photo1(APIView):
    serializer_class = Photoser
    def post(self, request):
        serializer = Photoser( data= request.data)
        if serializer.is_valid(raise_exception=True): 
            serializer.save()
            return Response(True)

class tweetView(APIView):

    serializer_class = tweetser
    def get (self, request):
        tweets = [ {"tweet_text": tweets.tweet_text, "tweet_id":tweets.tweet_id}  
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
        comments = [ {"comm_text": comments.comm_text, "comm_id":comments.comm_id}  
        for comments in comm.objects.all()] 
        return Response(comments)

    def post(self,request):
        serializer = commentser(data = request.data)
        print(request.data, "hereeeeeeeeeeeeeeeeeeeeee")
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(True)


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


# class forPost(APIView):
#     serializer_class = postser
#     def post (self, request):
#         serializer = postser(data = request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save()
#             return Response(True)

#     def get(self, request):
#         posts = [ {"p_post": posts.p_post,"post_id": posts.post_id}  
#         for posts in post1.objects.all()] 
#         # for posts in post1.objects.all():
#         #     print(posts.us.username)
#         return Response(posts)
