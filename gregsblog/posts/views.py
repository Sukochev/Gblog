from django.views.generic import DetailView, ListView

from .models import Post


class PostsListView(ListView):
    queryset = Post.published.all()
    template_name = "posts/home.html"


class PostsDetailView(DetailView):
    queryset = Post.published.all()
    template_name = "posts/post_detail.html"
