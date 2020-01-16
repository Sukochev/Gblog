from django.views.generic.base import TemplateView


class CoverPageView(TemplateView):
    template_name = "sitepages/cover.html"


class TrianglesPageView(TemplateView):
    template_name = "sitepages/cover_triangles.html"


class RainbowCirclesPageView(TemplateView):
    template_name = "sitepages/cover_rainbow_circles.html"


class CoswavesPageView(TemplateView):
    template_name = "sitepages/cover_coswaves.html"


class AboutPageView(TemplateView):
    template_name = "sitepages/about.html"


class SurpriseOnePageView(TemplateView):
    template_name = "sitepages/view1.html"


class SurpriseTwoPageView(TemplateView):
    template_name = "sitepages/view2.html"


class SurpriseThreePageView(TemplateView):
    template_name = "sitepages/view3.html"


class StarshowerPageView(TemplateView):
    template_name = "sitepages/starshower.html"


class SpinstarsPageView(TemplateView):
    template_name = "sitepages/spinstars.html"


class DemoPageView(TemplateView):
    template_name = "sitepages/demo.html"
