from django.db import models

class Record(models.Model):
    title = models.TextField(max_length=32, blank=False, null=False)
    rollno = models.IntegerField(blank = False,null = False)
    firstname = models.TextField(max_length=32, blank=False, null=False)
    lastname = models.TextField(max_length=32)
    mathmarks = models.IntegerField(blank = False,null = False)
    physicsmarks = models.IntegerField(blank = False,null = False)
    chemistrymarks = models.IntegerField(blank = False,null = False)

