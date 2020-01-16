from django.db import models
from django.db.models import QuerySet


class PublishedPostsManager(models.Manager):
    def get_queryset(self) -> QuerySet:
        return super().get_queryset().filter(posted=True).order_by("-pub_date")
