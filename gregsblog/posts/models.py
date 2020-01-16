from django.db import models
from django.utils.translation import gettext_lazy as _

from .managers import PublishedPostsManager


# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=100)
    pub_date = models.DateTimeField()
    image = models.ImageField(upload_to="media/")
    body = models.TextField()
    posted = models.BooleanField(
        verbose_name="Published",
        default=True,
        help_text=_(
            "Unchecking this box will put the post "
            "into draft mode and it will not appear on the site."
        ),
    )
    slug = models.SlugField(
        null=True,
        max_length=50,
        help_text=_(
            "This field determines the url path of this event. "
            "It defaults to the title."
        ),
    )

    class Meta:
        ordering = ["-pub_date"]
        verbose_name = "Post"
        verbose_name_plural = "Posts"

    def __str__(self):
        return self.title

    def pub_date_pretty(self):
        return self.pub_date.strftime("%b %d %Y")

    def summary(self):
        summary = self.body[:100]
        return "{} ...".format(summary)

    objects = models.Manager()  # To eliminate local pylint errors
    published = PublishedPostsManager()
