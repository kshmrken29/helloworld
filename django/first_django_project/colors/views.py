from django.shortcuts import render
from django.http import HttpResponse

def colors(request):
    return HttpResponse("Hello world!")
def color(request, color_name):
    return HttpResponse(f"{color_name}")