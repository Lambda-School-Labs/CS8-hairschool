from django.db import models
from uuid import uuid4
from django.contrib.auth.models import User

class SignUp(models.Model):
    # id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=255)
    email= models.CharField(max_length=255)
    password= models.CharField(max_length=255)


    def __str__(self):
       return self.name

class SignIn(SignUp):
  user = models.ForeignKey(User, on_delete=models.CASCADE)