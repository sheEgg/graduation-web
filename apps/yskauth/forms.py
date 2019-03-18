from django import forms
from apps.forms import FormMixin


# 登录验证
class LoginForm(forms.Form, FormMixin):
    telephone = forms.CharField(max_length=11, required=True, error_messages={"required": "账号不能为空"})
    password = forms.CharField(max_length=20, min_length=6, required=True,
                               error_messages={"max_length": "密码最多不能超过20个字符", "min_length": "密码最少不能少于6个字符",
                                               "required": "密码不能为空"})
    remember = forms.IntegerField(required=False)
