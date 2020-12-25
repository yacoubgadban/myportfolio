from django.shortcuts import render

from project.models import Project


def home(request):
    projects = Project.objects.all()
    return render(request, 'personal/home.html', {'projects': projects})
