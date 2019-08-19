from django.shortcuts import render


# Create your views here.
def cover(request):
    return render(request, "sitepages/cover.html")


def cover_triangles(request):
    return render(request, "sitepages/cover_triangles.html")


def cover_rainbow_circles(request):
    return render(request, "sitepages/cover_rainbow_circles.html")


def cover_coswaves(request):
    return render(request, "sitepages/cover_coswaves.html")


def about(request):
    return render(request, "sitepages/about.html")


def view1(request):
    return render(request, "sitepages/view1.html")


def view2(request):
    return render(request, "sitepages/view2.html")


def view3(request):
    return render(request, "sitepages/view3.html")


def starshower(request):
    return render(request, "sitepages/starshower.html")


def spinstars(request):
    return render(request, "sitepages/spinstars.html")


def demo(request):
    return render(request, "sitepages/demo.html")
