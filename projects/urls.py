from django.urls import path, include
from . import views

urlpatterns = [
    path('newproject', views.newproject, name='newproject'),
    path('yourprojects', views.yourprojects, name='yourprojects'),
    path('<int:projectinfo_id>/', views.projectDetail, name='projectDetail'),
]
