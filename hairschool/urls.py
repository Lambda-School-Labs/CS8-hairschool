from django.urls import include, path

from . import views
from rest_framework import routers



urlpatterns = [
    path('', views.UserListView.as_view()),
    path('', include('rest_auth.urls')),
    path('registration/', include('rest_auth.registration.urls')),
]
