from rest_framework import serializers
from .models import Menu

class MenuSerializer(serializers.ModelSerializer):

    class Meta:
        model = Menu
        fields = '__all__'
        read_only_fields = ['created', 'updated', 'id']