from django.urls import path
from . import views

app_name = 'yskauth'

urlpatterns = [
    path('', views.index, name='index'),
    path('login/', views.login_view, name='login'),
]