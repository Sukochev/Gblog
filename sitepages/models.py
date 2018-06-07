from django.db import models
from random import randint
from random import choice


# Create your models here.
class Sitepages(models.Model):
    title = models.CharField(max_length=50)
    body = models.TextField()

    def __str__(self):
        return self.title

   # def random1():
    #    return choice([http://www.numberphile.com/, http://www.sixtysymbols.com/, href="{% url 'surprise' %}"])
        
        

 