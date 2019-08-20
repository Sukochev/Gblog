import sitepages.views
from django.urls import path

app_name = "sitepages"

urlpatterns = [
    path("about/", sitepages.views.about, name="about"),
    path("view1/", sitepages.views.view1, name="view1"),
    path("view2/", sitepages.views.view2, name="view2"),
    path("view3/", sitepages.views.view3, name="view3"),
    path("cover_triangles/", sitepages.views.cover_triangles, name="cover_triangles"),
    path(
        "cover_rainbow_circles/",
        sitepages.views.cover_rainbow_circles,
        name="cover_rainbow_circles",
    ),
    path("cover_coswaves/", sitepages.views.cover_coswaves, name="cover_coswaves"),
    path("starshower/", sitepages.views.starshower, name="starshower"),
    path("spinstars/", sitepages.views.spinstars, name="spinstars"),
    path("demo/", sitepages.views.demo, name="demo"),
]  # type: ignore
