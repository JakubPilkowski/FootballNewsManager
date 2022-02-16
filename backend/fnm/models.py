from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin

from django.utils.translation import ugettext_lazy as _
from django.utils import timezone

from .user_manager import UserManager

class Category(models.Model):
    name = models.CharField(max_length=100)
    smth = models.CharField(max_length=155)

    def __str__(self):
        return self.name

class Ingredient(models.Model):
    name = models.CharField(max_length=150)
    notes = models.TextField()
    category = models.ForeignKey(Category, related_name="ingredients", on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(
        unique=True,
        max_length=255,
        blank=False,
    )
    # first_name = models.CharField(
    #     _('first name'),
    #     max_length=30,
    #     blank=True,
    # )
    # last_name = models.CharField(
    #     _('last name'),
    #     max_length=150,
    #     blank=True,
    # )
    is_staff = models.BooleanField(
        default=False,
        help_text=_('user_is_staff_help_text'),
    )
    is_active = models.BooleanField(
        default=True,
        help_text=_('user_is_active_help_text'),
    )
    date_joined = models.DateTimeField(
        default=timezone.now,
    )

    # Add additional fields here if needed

    objects = UserManager()

    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'

    def __str__(self):
        return self.email