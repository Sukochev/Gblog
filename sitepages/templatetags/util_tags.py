import random

from django import template
from django.urls import reverse

register = template.Library()


@register.simple_tag
def random_url():
    list_of_route_names = ["view1", "view2", "view3"]  # names from urls.py
    return reverse(random.choice(list_of_route_names))  # nosec
