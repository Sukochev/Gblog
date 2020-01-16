from django.urls import path
from sitepages.views import (
    AboutPageView,
    CoswavesPageView,
    DemoPageView,
    RainbowCirclesPageView,
    SpinstarsPageView,
    StarshowerPageView,
    SurpriseOnePageView,
    SurpriseThreePageView,
    SurpriseTwoPageView,
    TrianglesPageView,
)

app_name = "sitepages"

urlpatterns = [
    path("about/", AboutPageView.as_view(), name="about"),
    path("view1/", SurpriseOnePageView.as_view(), name="view1"),
    path("view2/", SurpriseTwoPageView.as_view(), name="view2"),
    path("view3/", SurpriseThreePageView.as_view(), name="view3"),
    path("cover_triangles/", TrianglesPageView.as_view(), name="cover_triangles"),
    path(
        "cover_rainbow_circles/",
        RainbowCirclesPageView.as_view(),
        name="cover_rainbow_circles",
    ),
    path("cover_coswaves/", CoswavesPageView.as_view(), name="cover_coswaves"),
    path("starshower/", StarshowerPageView.as_view(), name="starshower"),
    path("spinstars/", SpinstarsPageView.as_view(), name="spinstars"),
    path("demo/", DemoPageView.as_view(), name="demo"),
]  # type: ignore
