from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import CustomUser , Appointment, Service, Stylist , User_Feedback


class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = CustomUser
        fields = ('username', 'email')

class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = CustomUser
        fields = UserChangeForm.Meta.fields

class CreateAppointment(forms.ModelForm):
    class Meta:
        model = Appointment
        fields = ( 'time', 'Stylist', 'Service', )

class CreateService(forms.ModelForm):
    class Meta:
        model = Service
        fields = ( 'styling', 'price', )

class CreateStylist(forms.ModelForm):
    class Meta:
        model = Stylist
        fields = ( 'full_name', 'availability', )        

class CreateUser_Feedback(forms.ModelForm):
    class Meta:
        model = User_Feedback
        fields = ( 'Stylist', 'Service','Time',
                   'Consultation','Notes','On_time','Notes','Styling','Notes',
                   'Customer_Service','Notes','Overall','Notes',)
