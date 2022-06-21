
from django.urls import path,include
from . import views
from rest_framework import routers
from django.conf.urls.static import static
from django.conf import settings



urlpatterns = [
    path('forest',views.Forest),
    path('test',views.test)


]