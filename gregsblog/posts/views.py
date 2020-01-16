from django.db.models import Q
from django.views.generic import DetailView, ListView

from .models import Post


class PostsListView(ListView):
    template_name = "posts/home.html"
    paginate_by = 8

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
            return Post.published.filter(
                Q(title__icontains=query) | Q(body__icontains=query)
            )
        else:
            return Post.published.all()


class PostsDetailView(DetailView):
    queryset = Post.published.all()
    template_name = "posts/post_detail.html"
