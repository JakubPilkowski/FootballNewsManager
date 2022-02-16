from django.conf.urls import url
from fnm import views
from django.utils import translation

urlpatterns = [
    url(r"^verify-account/$", views.VerifyAccountView, name="verify-account"),
]
