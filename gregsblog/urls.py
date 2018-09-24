"""gregsblog URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
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

import posts.views
import sitepages.views
from django.conf.urls import url
from django.conf.urls.static import static
from django.conf import settings
from sitepages.views import cover

urlpatterns = [
    url(r'^back/', admin.site.urls),
    url(r'^home/', posts.views.home, name="home"),
    url(r'^posts/(?P<post_id>[0-9]+)/$', posts.views.post_details, name="post_detail"),
    url(r'^about/', sitepages.views.about, name="about"),
    url(r'^view1/', sitepages.views.view1, name="view1"),
    url(r'^view2/', sitepages.views.view2, name="view2"),
    url(r'^view3/', sitepages.views.view3, name="view3"),
    url(r'^$', sitepages.views.cover, name="cover"),
    url(r'^cover_triangles/', sitepages.views.cover_triangles, name="cover_triangles"),
    url(r'^cover_rainbow_circles/', sitepages.views.cover_rainbow_circles, name="cover_rainbow_circles"),
    url(r'^cover_coswaves/', sitepages.views.cover_coswaves, name="cover_coswaves"),
    url(r'^starshower/', sitepages.views.starshower, name="starshower"),
    url(r'^spinstars/', sitepages.views.spinstars, name="spinstars"),
    url(r'^demo/', sitepages.views.demo, name="demo"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT,)





