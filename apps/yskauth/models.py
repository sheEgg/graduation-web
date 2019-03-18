from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from shortuuidfield import ShortUUIDField
from django.db import models


class UserManger(BaseUserManager):
    # 创建用户使用，受保护
    def _create_user(self, telephone, username, password, **kwargs):
        if not telephone:
            raise ValueError('请传入手机号码')
        if not username:
            raise ValueError('请传入用户名')
        if not password:
            raise ValueError('请传入密码')

        user = self.model(telephone=telephone, username=username, **kwargs)
        user.set_password(password)
        user.save()
        return user

    # 创建普通用户
    def create_user(self, telephone, username, password, **kwargs):
        kwargs['is_superuser'] = False
        return self._create_user(telephone, username, password, **kwargs)

    def create_superuser(self, telephone, username, password, **kwargs):
        kwargs['is_superuser'] = True
        kwargs['is_staff'] = True
        return self._create_user(telephone, username, password, **kwargs)


# 创建一个User模型
class User(AbstractBaseUser, PermissionsMixin):
    # 不使用默认的自增长的主键
    # 使用uuid/shortuuid
    uid = ShortUUIDField(primary_key=True)
    telephone = models.CharField(max_length=11, unique=True)
    email = models.CharField(max_length=200, unique=True, null=True)
    username = models.CharField(max_length=100)
    job = models.CharField(max_length=50, default='中医副主任医师')
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    data_joined = models.DateTimeField(auto_now_add=True)

    # 指定telephone作为USERNAME_FIELD，以后使用authenticate,函数验证的时候，就可以根据telephone来验证
    USERNAME_FIELD = 'telephone'
    # telephone, username, password
    REQUIRED_FIELDS = ['username']
    EMAIL_FIELD = 'email'

    # 重新定义Manager对象，在创建user的时候使用telephone和password，而不是使用username和password
    objects = UserManger()

    def get_full_name(self):
        return self.username

    def get_short_name(self):
        return self.username
