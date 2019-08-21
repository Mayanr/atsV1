"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include
from rest_framework import routers
from ATS_v1 import views
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'industry', views.IndustryView, 'Industry') 
router.register(r'company', views.CompanyView, 'Company') 
router.register(r'role', views.RoleView, 'Role') 
router.register(r'employee', views.EmployeeView, 'Employee')
router.register(r'department', views.DepartmentView, 'Department')
router.register(r'job_status', views.Job_StatusView, 'Job_Status')
router.register(r'job', views.JobView, 'Job')
router.register(r'candidate', views.CandidateView, 'Candidate')
router.register(r'candidate_status', views.Candidate_StatusView, 'Candidate_Status')
router.register(r'source', views.SourceView, 'Source')
router.register(r'candidate_consideration', views.Candidate_ConsiderationView, 'Candidate_Consideration')
router.register(r'document', views.DocumentView, 'Document')
router.register(r'interview', views.InterviewView, 'Interview')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    url(r'^api/jobs/(?P<c_id>\d+)$', views.AllCompanyJobsView)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
