from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from .models import Projectinfo
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt,csrf_protect


def home(request):
    return render(request, 'projects/home.html')

def yourprojects(request):
    projectinfo = Projectinfo.objects
    return render(request, 'projects/yourprojects.html', {'projectinfo':projectinfo})


@csrf_exempt
@login_required
def newproject(request):
    if request.method == 'POST':
        if request.POST['title'] and request.POST['branch'] and request.POST['directorate'] and request.POST['email'] and request.POST['program_service'] and request.POST['giturl']:
            projectinfo = Projectinfo()
            projectinfo.title = request.POST['title']
            projectinfo.branch = request.POST['branch']
            projectinfo.directorate = request.POST['directorate']
            projectinfo.email = request.POST['email']
            projectinfo.program_service = request.POST['program_service']
            if request.POST['giturl'].startswith('http://') or request.POST['giturl'].startswith('https://'):
                projectinfo.giturl = request.POST['giturl']
            else:
                projectinfo.giturl = 'http://' + request.POST['giturl']
            projectinfo.pub_date = timezone.datetime.now()
            projectinfo.project_lead = request.user
            projectinfo.save()
            return redirect('/projects/' + str(projectinfo.id))
        else:
            return render(request, 'projects/newproject.html', {'error': 'All fields are required'})


    else:
        return render(request, 'projects/newproject.html')


def projectDetail(request, projectinfo_id):
    projectinfo = get_object_or_404(Projectinfo, pk=projectinfo_id)
    return render(request, 'projects/projectDetail.html', {'projectinfo': projectinfo})
