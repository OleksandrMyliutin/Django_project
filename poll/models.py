from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator
from django.db import models

# Create your models here.
class User(AbstractUser):
    username_validator = RegexValidator(regex=r'^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$',
                                        message='Логін повинен мати щонайменш 8 символів, літери англійського алфавіту та цифри')
     email_validator = RegexValidator(regex=r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$',
                                     message='Неправильна адреса електронної пошти!')
    phone_validator = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Номер телефону повинен мати до 15 цифр у форматі: '+999999999'.")
    password_validator = RegexValidator(regex=r'^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])([^\s]){8,26}$', message='Пароль повинен мати: 8-26 символів, цивру, великоу та маленьку літери')


    username = models.CharField(max_length=50, validators=[username_validator], unique=True, error_messages={'unique': 'Користувач з таким іменем вже існує.', 'max_length': 'Довжина не повинна перевищувати 50 символів.'})
    email = models.CharField(max_length=150, validators=[email_validator], unique=True, error_messages={'unique': 'Користувач з такою електронною поштою вже існує.', 'max_length': 'Довжина не повинна перевищувати 150 символів.'})
    password = models.CharField(max_length=27, validators=[password_validator], error_messages={'max_length': 'Довжина не повинна перевищувати 26 символів.'})
    phone_number = models.CharField(max_length=17, validators=[phone_validator], verbose_name='Номер телефону', error_messages={'max_length': 'Довжина не повинна перевищувати 17 символів.'})
    address = models.CharField(max_length=255, verbose_name='Адреса', error_messages={'max_length': 'Довжина не повинна перевищувати 255 символів.'})