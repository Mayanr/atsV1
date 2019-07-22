from django.shortcuts import render

from rest_framework import viewsets
from .serializers import *
from .models import *

class IndustryView(viewsets.ModelViewSet):
    serializer_class = IndustrySerializer
    queryset = Industry.objects.all()

class CompanyView(viewsets.ModelViewSet):
    serializer_class = CompanySerializer
    queryset = Company.objects.all()

class RoleView(viewsets.ModelViewSet):
    serializer_class = RoleSerializer
    queryset = Role.objects.all()

class EmployeeView(viewsets.ModelViewSet):
    serializer_class = EmployeeSerializer
    queryset = Employee.objects.all()

class DepartmentView(viewsets.ModelViewSet):
    serializer_class = DepartmentSerializer
    queryset = Department.objects.all()

class Job_StatusView(viewsets.ModelViewSet):
    serializer_class = Job_StatusSerializer
    queryset = Job_Status.objects.all()

class JobView(viewsets.ModelViewSet):
    serializer_class = JobSerializer
    queryset = Job.objects.all()

class CandidateView(viewsets.ModelViewSet):
    serializer_class = CandidateSerializer
    queryset = Candidate.objects.all() 

class Candidate_StatusView(viewsets.ModelViewSet):
    serializer_class = Candidate_StatusSerializer
    queryset = Candidate_Status.objects.all() 

class SourceView(viewsets.ModelViewSet):
    serializer_class = SourceSerializer
    queryset = Source.objects.all()

class Candidate_ConsiderationView(viewsets.ModelViewSet):
    serializer_class = Candidate_ConsiderationSerializer
    queryset = Candidate_Consideration.objects.all() 

class DocumentView(viewsets.ModelViewSet):
    serializer_class = DocumentSerializer
    queryset = Document.objects.all()

class InterviewView(viewsets.ModelViewSet):
    serializer_class = InterviewSerializer
    queryset = Interview.objects.all()              
