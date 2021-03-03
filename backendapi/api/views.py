from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import UserSerializer, RecordSerializer
from .models import Record


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class RecordViewSet(viewsets.ModelViewSet):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer