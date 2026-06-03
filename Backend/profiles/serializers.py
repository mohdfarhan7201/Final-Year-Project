from rest_framework import serializers
from .models import Profile, Skill, UserSkill, ProfileView


class ProfileSerializer(serializers.ModelSerializer):
    # User fields (flat in request/response)
    displayName = serializers.CharField(required=False, allow_blank=True)
    email = serializers.EmailField(read_only=True)
    phone = serializers.CharField(required=False, allow_blank=True)
    bio = serializers.CharField(required=False, allow_blank=True)
    profile_photo_url = serializers.URLField(required=False, allow_blank=True)
    profile_photo = serializers.ImageField(read_only=True)

    class Meta:
        model = Profile
        fields = (
            'user', 'headline', 'summary', 'resume_url', 'linked_profiles',
            'location', 'current_company', 'total_experience', 'availability_status',
            'updated_at', 'displayName', 'email', 'phone', 'bio', 'profile_photo_url', 'profile_photo'
        )
        read_only_fields = ('user', 'updated_at', 'profile_photo')

    def to_representation(self, instance):
        repr = super().to_representation(instance)
        user = instance.user
        repr['displayName'] = user.displayName
        repr['email'] = user.email
        repr['phone'] = user.phone
        repr['bio'] = user.bio
        repr['profile_photo_url'] = user.profile_photo_url
        if user.profile_photo:
            request = self.context.get('request')
            if request:
                repr['profile_photo'] = request.build_absolute_uri(user.profile_photo.url)
            else:
                repr['profile_photo'] = user.profile_photo.url
        else:
            repr['profile_photo'] = None
        return repr

    def update(self, instance, validated_data):
        # Extract user data
        user_fields = ['displayName', 'phone', 'bio', 'profile_photo_url']
        user_data = {field: validated_data.pop(field) for field in user_fields if field in validated_data}
        
        # Update user fields
        if user_data:
            user = instance.user
            for attr, value in user_data.items():
                setattr(user, attr, value)
            user.save()
            
        # Update profile fields
        return super().update(instance, validated_data)


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'
        read_only_fields = ('id', 'created_at')


class UserSkillSerializer(serializers.ModelSerializer):
    skill_name = serializers.CharField(required=False)

    class Meta:
        model = UserSkill
        fields = ('id', 'user', 'skill', 'skill_name', 'proficiency_level', 'created_at')
        read_only_fields = ('id', 'user', 'created_at', 'skill')

    def validate(self, data):
        skill_name = data.get('skill_name')
        skill_id = data.get('skill')

        if not skill_id and not skill_name:
            raise serializers.ValidationError("Either skill (ID) or skill_name must be provided.")

        if skill_name:
            try:
                skill = Skill.objects.get(name__iexact=skill_name)
                data['skill'] = skill
            except Skill.DoesNotExist:
                raise serializers.ValidationError(f"Skill '{skill_name}' does not exist. Please contact an admin to add it.")
        
        # Remove skill_name from data as it's not a model field
        data.pop('skill_name', None)
        return data

    def to_representation(self, instance):
        repr = super().to_representation(instance)
        repr['skill_name'] = instance.skill.name
        return repr


class ProfileViewSerializer(serializers.ModelSerializer):
    viewer_name = serializers.CharField(source='viewer.displayName', read_only=True)

    class Meta:
        model = ProfileView
        fields = ('id', 'viewer', 'viewer_name', 'viewed_user', 'viewed_at')
        read_only_fields = ('id', 'viewer', 'viewed_at')