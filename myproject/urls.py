from django.contrib import admin
from django.urls import path
from myapp import views  # Import your views
from django.views.generic import TemplateView  # For static HTML pages
from django.urls import path, include
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('myapp.urls')),  # Include the app URLs
]