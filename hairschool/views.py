from rest_framework import generics

from . import models
from . import serializers

# User Views
class UserListView(generics.ListCreateAPIView):
    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.UserSerializer

# Appointment Views
class AppointmentListView(generics.ListCreateAPIView):
    queryset = models.Appointment.objects.all()
    serializer_class = serializers.AppointmentSerializer

# Services Views
class ServiceListView(generics.ListCreateAPIView):
    queryset = models.Service.objects.all()
    serializer_class = serializers.ServiceSerializer

# Stylist Views
class StylistListView(generics.ListCreateAPIView):
    queryset = models.Stylist.objects.all()
    serializer_class = serializers.StylistSerializer