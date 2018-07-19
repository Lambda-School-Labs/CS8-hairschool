from django.shortcuts import render
from rest_framework import viewsets

from .models import SignUp
from .serializers import SignUpSerializer


class SignUpView(viewsets.ModelViewSet):
    queryset = SignUp.objects.all()
    serializer_class = SignUpSerializer