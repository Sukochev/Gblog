from django.shortcuts import render
from .models import Sitepages



# Create your views here.
def cover(request):
    return render(request, 'sitepages/cover.html')

def about(request):
    return render(request, 'sitepages/about.html')

def view1(request):
    return render(request, 'sitepages/view1.html')

def view2(request):
    return render(request, 'sitepages/view2.html')

def view3(request):
    return render(request, 'sitepages/view3.html')


   
