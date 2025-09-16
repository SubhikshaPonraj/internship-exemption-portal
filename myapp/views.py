from django.shortcuts import render

def index(request):
    return render(request, 'myapp/login.html')

# def create_tracker_view(request):
#     return render(request, 'myapp/create_tracker.html')

def internship_report_view(request):
    return render(request, 'myapp/internship_report.html')

def internship_tracker_view(request):
    return render(request, 'myapp/internship_tracker.html')

def login_view(request):
    return render(request, 'myapp/login.html')

def mark_evaluation_view(request):
    return render(request, 'myapp/mark_evaluation.html')

def report_approval_view(request):
    return render(request, 'myapp/report_approval.html')

def review_view(request):
    return render(request, 'myapp/review.html')

def status_view(request):
    return render(request, 'myapp/status.html')

def tracker_approval_view(request):
    return render(request, 'myapp/tracker_approval.html')
