from django.contrib.auth.models import AbstractUser
from django.db import models
# from django.contrib.auth.models import User
# from uuid import uuid4



class CustomUser(AbstractUser):
    name = models.CharField(blank=True, max_length=255)

    def __str__(self):
        return self.email


class Appointment(models.Model):
#    username = models.UUIDField(primary_key=True, default=uuid4, editable=False)
   date = models.DateTimeField(auto_now_add=True)
   time = models.DateTimeField()
   Stylist = models.CharField(max_length=30)
   Service = models.CharField(max_length=30)
   
#    def __unicode__(self):
#        return self.name
