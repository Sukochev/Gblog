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
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from posts.views import PostsDetailView, PostsListView
from sitepages.views import CoverPageView

urlpatterns = [
    path("back/", admin.site.urls),
    path("home/", PostsListView.as_view(), name="home"),
    path("posts/<slug:slug>/", PostsDetailView.as_view(), name="post_detail"),
    path("", CoverPageView.as_view(), name="cover"),
    path("", include("sitepages.urls", namespace="sitepages")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
