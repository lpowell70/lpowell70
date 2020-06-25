from django.db import models
from django.contrib.auth.models import User

class Projectinfo(models.Model):
    title = models.CharField(max_length=225)
    branch = models.CharField(max_length=225)
    directorate = models.CharField(max_length=225)
    email = models.EmailField(max_length=254)
    program_service = models.CharField(max_length=225)
    pub_date = models.DateTimeField()
    giturl = models.TextField()
    image = models.ImageField(upload_to='images/')
    project_lead = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    def pub_date_pretty(self):
        return self.pub_date.strftime('%b %e %Y')
