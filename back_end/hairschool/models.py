from django.db import models

# Create your models here.

class hairschool(models.Model):
    name = models.CharField(max_length=50)
    phonenumber = models.IntegerField()