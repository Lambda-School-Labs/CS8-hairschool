from rest_framework import serializers,viewsets
from .models import SignUp
from .models import SignIn



class SignUpSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        model = SignUp
        fields = ('id', 'name', 'email', 'password')


class SignUpViewset(viewsets.ModelViewSet):
    queryset = SignUp.objects.all()
    serializer_class = SignUpSerializer




class SignInSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        model = SignIn
        fields =('id', 'name', 'password')

    

class SignInViewset(viewsets.ModelViewSet):
    queryset = SignIn.objects.all()
    serializer_class = SignInSerializer

