from django.urls import path
from . import views

urlpatterns = [
    path('colors/', views.colors, name='colors'),
    path('colors/<str:color_name>/',views.color, name='color'),
]