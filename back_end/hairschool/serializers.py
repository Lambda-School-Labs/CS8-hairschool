from .models import SignUp
from rest_framework import serializers



class SignUpSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SignUp
        fields = ('id', 'name', 'email', 'password')