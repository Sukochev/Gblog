from django.contrib import admin

from .models import Post


class PostsAdmin(admin.ModelAdmin):
    list_display = ("__str__", "posted")
    list_filter = ("posted",)
    search_fields = ("posted", "title")
    prepopulated_fields = {"slug": ("title",)}


admin.site.register(Post, PostsAdmin)
