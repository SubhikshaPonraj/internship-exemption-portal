from django.urls import path
from . import views  # Import your views

urlpatterns = [
    path('', views.index, name='index'),  # Route for the homepage
    # path('create_tracker/', views.create_tracker_view, name='create_tracker'),
    path('internship_report/', views.internship_report_view, name='internship_report'),
    path('internship_tracker/', views.internship_tracker_view, name='internship_tracker'),
    path('login/', views.login_view, name='login'),
    path('mark_evaluation/', views.mark_evaluation_view, name='mark_evaluation'),
    path('report_approval/', views.report_approval_view, name='report_approval'),
    path('review/', views.review_view, name='review'),
    path('status/', views.status_view, name='status'),
    path('tracker_approval/', views.tracker_approval_view, name='tracker_approval')
]
