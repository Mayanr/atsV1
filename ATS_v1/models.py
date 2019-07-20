from __future__ import unicode_literals
from django.db import models
import datetime
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


class EmployeeManager(models.Manager):
    def basic_validator(self, postData):
        pass



# Create your models here.
class Industry(models.Model):
    name = models.CharField(max_length=254)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # objects = IndustryManager()
    
class Company(models.Model):
    name = models.CharField(max_length=254)
    description = models.TextField()
    industry = models.ForeignKey(Industry, related_name="co_in_industry", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # objects = CompanyManager()

class Role(models.Model):
    name = models.CharField(max_length=254)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # objects = RoleManager()

class Employee(models.Model):
    company = models.ForeignKey(Company, related_name="co_employees", on_delete=models.CASCADE)
    first_name = models.CharField(max_length=254)
    last_name = models.CharField(max_length=254)
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=254)
    hiring_role = models.ForeignKey(Role, related_name="team", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = EmployeeManager()

class Department(models.Model):
    name = models.CharField(max_length=254)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # objects = DepartmentManager()

class Job_Status(models.Model):
    progress = models.CharField(max_length=254)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # objects = Job_StatusManager()

class Job(models.Model):
    company = models.ForeignKey(Company, related_name="job_listings", on_delete=models.CASCADE)
    title = models.CharField(max_length=254)
    description = models.TextField()
    hiring_team = models.ManyToManyField(Employee, related_name="hiring_for_job")
    department = models.ForeignKey(Department, related_name="jobs", on_delete=models.CASCADE)
    req_id = models.CharField(max_length=50)
    status = models.ForeignKey(Job_Status, related_name="job_status_label", on_delete=models.CASCADE)
    created_by = models.ForeignKey(Employee, related_name="created_job", on_delete=models.CASCADE)
    edited_by = models.ForeignKey(Employee, related_name="edited_job", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # objects = JobManager()

class Candidate(models.Model):
    first_name = models.CharField(max_length=254)
    last_name = models.CharField(max_length=254)
    email = models.EmailField(max_length = 254)
    linkedIn_url = models.URLField(max_length=200)
    website_url = models.URLField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # objects = CandidateManager()

class Candidate_Status(models.Model):
    progress = models.CharField(max_length=254)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # objects = Candidate_StatusManager()

class Source(models.Model):
    name = models.CharField(max_length=254)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # objects = SourceManager()

class Candidate_Consideration(models.Model):
    applicant = models.ForeignKey(Candidate, related_name="applied_for", on_delete=models.CASCADE)
    considered_for = models.ForeignKey(Job, related_name="candidates_applied", on_delete=models.CASCADE)
    resume = models.FileField(upload_to='resumes/')
    source = models.ForeignKey(Source, related_name="lead_to_application", on_delete=models.CASCADE)
    recruiter = models.ForeignKey(Employee, related_name="managing_applicant", on_delete=models.CASCADE)
    status = models.ForeignKey(Candidate_Status, related_name="candidate_status_label", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # objects = Candidate_ConsiderationManager()

class Document(models.Model):
    applicant = models.ForeignKey(Candidate_Consideration, related_name="additional_docs", on_delete=models.CASCADE)
    doc_upload = models.FileField(upload_to='additional_docs/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # objects = DocumentManager()

class Interview(models.Model):
    date_scheduled_for = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    interviewee = models.ForeignKey(Candidate_Consideration, related_name="interview_schedule", on_delete=models.CASCADE)
    interviewers = models.ManyToManyField(Employee, related_name="interviewing_schedule")   
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # objects = InterviewManager()

