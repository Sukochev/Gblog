import factory
from factory.django import DjangoModelFactory
from sitepages.models import Sitepages


class SitepagesFactory(DjangoModelFactory):
    class Meta:
        model = Sitepages

    title = factory.Faker("company")
    body = factory.Faker("text", max_nb_chars=50, ext_word_list=None)
