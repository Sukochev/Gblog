from django.db import models


# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=100)
    pub_date = models.DateTimeField()
    image = models.ImageField(upload_to="media/")
    body = models.TextField()

    def __str__(self):
        return self.title

    def pub_date_pretty(self):
        return self.pub_date.strftime("%b %d %Y")

    def summary(self):
        summary = self.body[:100]
        return "{} ...".format(summary)

    objects = models.Manager()  # To eliminate local pylint errors
