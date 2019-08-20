from io import BytesIO

import factory
import pytz
from factory.django import DjangoModelFactory
from PIL import Image
from posts.models import Post


def create_jpeg():
    thumb = Image.new("RGB", (100, 100), "red")
    thumb_io = BytesIO()
    thumb.save(thumb_io, format="JPEG")
    return thumb_io


class PostFactory(DjangoModelFactory):
    class Meta:
        model = Post

    title = factory.Faker("company")
    pub_date = factory.Faker("iso8601", tzinfo=pytz.utc, end_datetime=None)
    image = factory.django.ImageField(from_func=create_jpeg)
    body = factory.Faker("text", max_nb_chars=50, ext_word_list=None)
