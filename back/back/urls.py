"""back URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from twitter.views import tweetView,CreateUser, commentView, Test,LogIn

urlpatterns = [
    path('admin/', admin.site.urls),
    path('tweet/', tweetView.as_view(), name="tweet"), 
    path('signup/', CreateUser.as_view(), name="users"),
    path('comment/', commentView.as_view(), name="comment"),
    path('test/', Test.as_view(), name="test"),
    path('login/', LogIn.as_view(), name="login")
]

