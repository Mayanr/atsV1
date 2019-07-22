from rest_framework import serializers
from .models import *

class IndustrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Industry
        fields = ('id', 'name', 'created_at', 'updated_at')


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id', 'name', 'description', 'industry', 'created_at', 'updated_at')


class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ('id', 'name', 'created_at', 'updated_at')



class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ('id', 'name', 'created_at', 'updated_at')

class Job_StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job_Status
        fields = ('id', 'progress', 'created_at', 'updated_at')

class JobSerializer(serializers.ModelSerializer):
    hiring_team = serializers.PrimaryKeyRelatedField(queryset=Employee.objects.all(), many=True)

    class Meta:
        model = Job
        fields = ('id', 'company', 'title', 'description', 'hiring_team', 'department',  'req_id', 'status', 'created_by', 'edited_by',  'created_at', 'updated_at')

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

class CandidateSerializer(serializers.ModelSerializer):
    linkedIn_url = serializers.URLField(required=False)
    website_url = serializers.URLField(required=False)

    class Meta:
        model = Candidate
        fields = ('id','first_name', 'last_name', 'email', 'linkedIn_url',  'website_url', 'created_at', 'updated_at')

class Candidate_StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate_Status
        fields = ('id', 'progress', 'created_at', 'updated_at')

class SourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Source
        fields = ('id', 'name', 'created_at', 'updated_at')

class Candidate_ConsiderationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate_Consideration
        fields = ('id', 'applicant', 'considered_for', 'resume', 'source',  'recruiter', 'status', 'created_at', 'updated_at')

class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ('id', 'applicant', 'doc_upload' ,'created_at', 'updated_at')

# class InterviewersSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = interviewers

