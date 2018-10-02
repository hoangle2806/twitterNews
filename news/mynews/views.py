# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

# Create your views here.
from .twitterCollection import getTweetsByUser
from django.http import HttpResponse
import json

def dataTwitter(request):
    response_data = {}
    newsChannels = ['cnn','nytimes']
    tweets = 5
    for channel in newsChannels:
        data = getTweetsByUser(channel,amountOfTweets = tweets)
        response_data[channel] = data
    return HttpResponse(json.dumps(response_data), content_type = 'application/json')
    

