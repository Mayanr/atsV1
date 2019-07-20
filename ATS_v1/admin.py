from django.contrib import admin
from .models import *

class IndustryAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'updated_at')

class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'industry', 'created_at', 'updated_at')

class RoleAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'updated_at')

class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('company', 'first_name', 'last_name', 'email', 'password',  'hiring_role', 'created_at', 'updated_at')

class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'updated_at')

class Job_StatusAdmin(admin.ModelAdmin):
    list_display = ('progress', 'created_at', 'updated_at')

class JobAdmin(admin.ModelAdmin):
    list_display = ('company', 'title', 'description', 'department',  'req_id', 'status', 'created_by', 'edited_by',  'created_at', 'updated_at')

class CandidateAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'linkedIn_url',  'website_url', 'created_at', 'updated_at')

class Candidate_StatusAdmin(admin.ModelAdmin):
    list_display = ('progress', 'created_at', 'updated_at')

class SourceAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'updated_at')

class Candidate_ConsiderationAdmin(admin.ModelAdmin):
    list_display = ('applicant', 'considered_for', 'resume', 'source',  'recruiter', 'status', 'created_at', 'updated_at')

class DocumentAdmin(admin.ModelAdmin):
    list_display = ('applicant', 'doc_upload' ,'created_at', 'updated_at')

class InterviewAdmin(admin.ModelAdmin):
    list_display = ('date_scheduled_for', 'start_time', 'end_time', 'interviewee', 'created_at', 'updated_at')

# Register your models here.
admin.site.register(Industry, IndustryAdmin)
admin.site.register(Company, CompanyAdmin)
admin.site.register(Role, RoleAdmin)
admin.site.register(Employee, EmployeeAdmin)
admin.site.register(Department, DepartmentAdmin)
admin.site.register(Job_Status, Job_StatusAdmin)
admin.site.register(Job, JobAdmin)
admin.site.register(Candidate, CandidateAdmin)
admin.site.register(Candidate_Status, Candidate_StatusAdmin)
admin.site.register(Source, SourceAdmin)
admin.site.register(Candidate_Consideration, Candidate_ConsiderationAdmin)
admin.site.register(Document, DocumentAdmin)
admin.site.register(Interview, InterviewAdmin)
