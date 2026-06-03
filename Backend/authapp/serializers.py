from rest_framework import serializers
from .models import User, RefreshToken, SessionAudit, Admin


class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8)

    class Meta:
        model = User
        fields = (
            'id', 'username', 'email', 'password', 'displayName',
            'phone', 'role', 'profile_photo_url', 'bio',
        )
        read_only_fields = ('id',)

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            displayName=validated_data.get('displayName', ''),
            phone=validated_data.get('phone', ''),
            role=validated_data.get('role', User.Role.JOB_SEEKER),
            profile_photo_url=validated_data.get('profile_photo_url', ''),
            bio=validated_data.get('bio', ''),
        )
        return user


class UserSerializer(serializers.ModelSerializer):
    # Profile fields (flat in response)
    headline = serializers.CharField(read_only=True)
    summary = serializers.CharField(read_only=True)
    resume_url = serializers.URLField(read_only=True)
    linked_profiles = serializers.JSONField(read_only=True)
    location = serializers.CharField(read_only=True)
    current_company = serializers.CharField(read_only=True)
    total_experience = serializers.IntegerField(read_only=True)
    availability_status = serializers.CharField(read_only=True)

    class Meta:
        model = User
        fields = (
            'id', 'username', 'email', 'displayName', 'profile_photo_url', 'profile_photo',
            'bio', 'role', 'is_active', 'email_verified', 'phone',
            'phone_verified', 'two_factor_enabled', 'last_login',
            'organization_id', 'created_at', 'updated_at',
            'headline', 'summary', 'resume_url', 'linked_profiles', 
            'location', 'current_company', 'total_experience', 'availability_status',
        )
        read_only_fields = (
            'id', 'is_active', 'email_verified', 'phone_verified',
            'last_login', 'created_at', 'updated_at',
        )

    def to_representation(self, instance):
        repr = super().to_representation(instance)
        from profiles.models import Profile
        try:
            profile, created = Profile.objects.get_or_create(user=instance)
            repr['headline'] = profile.headline
            repr['summary'] = profile.summary
            repr['resume_url'] = profile.resume_url
            repr['linked_profiles'] = profile.linked_profiles
            repr['location'] = profile.location
            repr['current_company'] = profile.current_company
            repr['total_experience'] = profile.total_experience
            repr['availability_status'] = profile.availability_status
        except Exception:
            pass
        return repr


class UserUpdateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=False, min_length=8)
    
    # Profile fields
    headline = serializers.CharField(required=False, allow_blank=True)
    summary = serializers.CharField(required=False, allow_blank=True)
    resume_url = serializers.URLField(required=False, allow_blank=True)
    linked_profiles = serializers.JSONField(required=False, allow_null=True)
    location = serializers.CharField(required=False, allow_blank=True)
    current_company = serializers.CharField(required=False, allow_blank=True)
    total_experience = serializers.IntegerField(required=False)
    availability_status = serializers.CharField(required=False)

    class Meta:
        model = User
        fields = (
            'displayName', 'profile_photo_url', 'profile_photo', 'bio', 'phone', 'password',
            'headline', 'summary', 'resume_url', 'linked_profiles', 'location', 
            'current_company', 'total_experience', 'availability_status',
        )

    def update(self, instance, validated_data):
        from profiles.models import Profile
        
        # Extract profile data
        profile_fields = [
            'headline', 'summary', 'resume_url', 'linked_profiles', 'location',
            'current_company', 'total_experience', 'availability_status'
        ]
        profile_data = {field: validated_data.pop(field) for field in profile_fields if field in validated_data}
        
        # Handle password
        password = validated_data.pop('password', None)
        if password:
            instance.set_password(password)
        
        # Update user fields
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        
        # Update or create profile
        if profile_data:
            profile, created = Profile.objects.get_or_create(user=instance)
            for attr, value in profile_data.items():
                setattr(profile, attr, value)
            profile.save()
            
        return instance


class RefreshTokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = RefreshToken
        fields = ('id', 'token_hash', 'expires_at', 'created_at', 'ip_address', 'is_revoked')
        read_only_fields = ('id', 'created_at')


class SessionAuditSerializer(serializers.ModelSerializer):
    class Meta:
        model = SessionAudit
        fields = ('id', 'user', 'login_at', 'logout_at', 'ip_address', 'location', 'success')
        read_only_fields = ('id', 'login_at')


class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ('user', 'activated_by', 'activated_at', 'permissions')
        read_only_fields = ('activated_at',)