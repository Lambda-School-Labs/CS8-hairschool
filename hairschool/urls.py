from django.urls import include, path

from . import views
# from rest_framework import routers



urlpatterns = [
    path('', include('rest_auth.urls')),
    path('users/all', views.UserListView.as_view()),
    path('appointments/', views.AppointmentListView.as_view()),
    path('services/', views.ServiceListView.as_view()),
    path('stylists/', views.StylistListView.as_view()),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/facebook/', views.FacebookLogin.as_view()),
    path('rest-auth/twitter/', views.TwitterLogin.as_view())


]
