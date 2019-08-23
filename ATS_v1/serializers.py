from rest_framework import serializers
from .models import *


class CompanySerializer(serializers.ModelSerializer):
    co_employees = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    job_listings = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Company
        fields = ('id', 'name', 'description', 'industry', 'co_employees', 'job_listings', 'created_at', 'updated_at')

class IndustrySerializer(serializers.ModelSerializer):
    # co_in_industry = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    co_in_industry = CompanySerializer(many=True, required=False)

    class Meta:
        model = Industry
        fields = ('id', 'name', 'co_in_industry', 'created_at', 'updated_at')

class RoleSerializer(serializers.ModelSerializer):
    team = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Role
        fields = ('id', 'name', 'team', 'created_at', 'updated_at')



class DepartmentSerializer(serializers.ModelSerializer):
    jobs = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Department
        fields = ('id', 'name', 'jobs', 'created_at', 'updated_at')

class Job_StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job_Status
        fields = ('id', 'progress', 'created_at', 'updated_at')

class CandidateSerializer(serializers.ModelSerializer):
    linkedIn_url = serializers.URLField(required=False)
    website_url = serializers.URLField(required=False)

    class Meta:
        model = Candidate
        fields = ('id','first_name', 'last_name', 'email', 'linkedIn_url',  'website_url', 'created_at', 'updated_at')

class JobSerializer(serializers.ModelSerializer):
    hiring_team = serializers.PrimaryKeyRelatedField(queryset=Employee.objects.all(), many=True)
    candidates_applied = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    # dept_details = DepartmentSerializer(many=False, read_only=True)
    department = serializers.PrimaryKeyRelatedField(queryset=Department.objects.all(), many=False)
    
    class Meta:
        model = Job
        fields = ('id', 'company', 'title', 'description', 'hiring_team', 'department',  'req_id', 'status', 'candidates_applied', 'created_by', 'edited_by',  'created_at', 'updated_at')


class Candidate_ConsiderationSerializer(serializers.ModelSerializer):
    considered_for = JobSerializer(many=False, read_only=True)
    applicant = CandidateSerializer(many=False, read_only=True)

    class Meta:
        model = Candidate_Consideration
        fields = ('id', 'applicant', 'considered_for', 'resume', 'source',  'recruiter', 'status', 'created_at', 'updated_at')

class InterviewSerializer(serializers.ModelSerializer):
    interviewers = serializers.PrimaryKeyRelatedField(queryset=Employee.objects.all(), many=True)

    class Meta:
        model = Interview
        fields = ('id', 'date_scheduled_for', 'start_time', 'end_time', 'interviewee', 'interviewers', 'created_at', 'updated_at')

class EmployeeSerializer(serializers.ModelSerializer):
    interviewing_schedule = InterviewSerializer(many=True, required=False)
    hiring_for_job = JobSerializer(many=True, required=False)

    class Meta:
        model = Employee
        fields = ('id', 'company', 'first_name', 'last_name', 'email', 'password',  'hiring_role', 'hiring_for_job', 'interviewing_schedule', 'created_at', 'updated_at')


class Candidate_StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate_Status
        fields = ('id', 'progress', 'created_at', 'updated_at')

class SourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Source
        fields = ('id', 'name', 'created_at', 'updated_at')


class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ('id', 'applicant', 'doc_upload' ,'created_at', 'updated_at')

# class InterviewersSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = interviewers

