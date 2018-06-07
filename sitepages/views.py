from django.shortcuts import render
from .models import Sitepages

# Create your views here.
def about(request):
    return render(request, 'sitepages/about.html')

def view1(request):
    return render(request, 'sitepages/view1.html')

def view2(request):
    return render(request, 'sitepages/view2.html')

def view3(request):
    return render(request, 'sitepages/view3.html')

    """ random()
    if random == 1
        return http://www.numberphile.com/
    elif random == 2
        return http://www.sixtysymbols.com/
    elif random == 3
    """