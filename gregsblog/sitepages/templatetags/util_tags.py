import random

from django import template
from django.urls import reverse

register = template.Library()


@register.simple_tag
def random_url():
    list_of_route_names = [
        "sitepages:view1",
        "sitepages:view2",
        "sitepages:view3",
    ]  # names from urls.py  # noqa: E501
    return reverse(random.choice(list_of_route_names))  # nosec
