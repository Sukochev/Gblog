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
import posts.views
import sitepages.views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("back/", admin.site.urls),
    path("home/", posts.views.home, name="home"),
    path("posts/<int:post_id>/", posts.views.post_details, name="post_detail"),
    path("", sitepages.views.cover, name="cover"),
    path("", include("sitepages.urls", namespace="sitepages")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
