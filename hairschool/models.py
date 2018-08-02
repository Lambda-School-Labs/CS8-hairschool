from django.contrib.auth.models import AbstractUser
from django.db import models
# from django.contrib.auth.models import User
from uuid import uuid4



class CustomUser(AbstractUser):
    # id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(blank=True, max_length=255)

    def __str__(self):
        return self.email

class Appointment(models.Model): 
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    date = models.DateTimeField(auto_now_add=True)
    time = models.DateTimeField()
    Stylist = models.CharField(max_length=30)
    Service = models.CharField(max_length=30)
   
#    def __unicode__(self):
#        return self.name

class Service(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    styling = models.CharField(max_length=30)
    price = models.CharField(max_length=30)

class Stylist(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    full_name = models.CharField(max_length=30)
    availability = models.CharField(max_length=30)
