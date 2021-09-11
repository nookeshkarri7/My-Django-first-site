from django.http import HttpResponse
from django.shortcuts import render

def home(response):
    a={"name":"nookesh"}
    return render(response,"index.html",a)

def converttoupper(response):
    a=(response.GET.get("textdata"))
    b={"name":a}
    return render(response,"index.html",b)