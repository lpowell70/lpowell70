from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required

# Create your views here.
def impacttool(request):
    return render(request, 'impact/impacttool.html')
