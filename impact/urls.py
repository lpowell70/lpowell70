from django.urls import path, include
from . import views

urlpatterns = [
    path('impacttool', views.impacttool, name='impacttool'),
]
