from django.db import models

from django.contrib.auth.models import User

class Internship(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    # Other relevant fields for internships

    def __str__(self):
        return self.title

class Tracker(models.Model):
    internship = models.ForeignKey(Internship, on_delete=models.CASCADE)
    task_name = models.CharField(max_length=255)
    due_date = models.DateField()
    status = models.CharField(max_length=50, default='To Do')  # Choices like 'To Do', 'In Progress', 'Completed'
    # Other relevant fields for trackers

    def __str__(self):
        return self.task_name

class InternshipReport(models.Model):
    student = models.CharField(max_length=255)  # Or a ForeignKey to a Student model if you have one
    year_of_study = models.CharField(max_length=50)
    ssig_number = models.CharField(max_length=255)
    special_lab = models.CharField(max_length=255)
    sector = models.CharField(max_length=255)
    industry_address_1 = models.CharField(max_length=255)
    industry_address_2 = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=255)
    original_certificate = models.FileField(upload_to='certificates/')  # Store file paths
    attested_certificate = models.FileField(upload_to='certificates/')  # Store file paths
    iqac_verification = models.CharField(max_length=50, default='Initiated')

    # Other relevant fields for internship reports
    def __str__(self):
        return f"Report for {self.student} - {self.year_of_study}"

class ReviewBooking(models.Model):
    # Assuming you want to store the booked slot
    slot = models.CharField(max_length=255)  # e.g., "12-9-2024 10:00AM to 11:00AM"
    # You might want to link this to a specific internship or student
    internship = models.ForeignKey(Internship, on_delete=models.CASCADE, null=True, blank=True)
    student = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True) # Or a Student model

    def __str__(self):
        return f"Review booked for {self.student} at {self.slot}"

