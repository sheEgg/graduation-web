from django.shortcuts import render
from django.contrib.auth import login, logout, authenticate
from django.views.decorators.http import require_POST
from apps.yskauth.forms import LoginForm
from utils import smssender, restful


def index(request):
    return render(request, 'login.html')


# 用户登录视图
@require_POST
def login_view(request):
    form = LoginForm(request.POST)
    if form.is_valid():
        telephone = form.cleaned_data.get('telephone')
        password = form.cleaned_data.get('password')
        remember = form.cleaned_data.get('remember')
        user = authenticate(request, username=telephone, password=password)

        if user:
            if user.is_active:
                login(request, user)
                if remember:
                    request.session.set_expiry(None)
                else:
                    request.session.set_expiry(0)
                return restful.ok()
            else:
                return restful.unauth_error(message="您的账号已经被冻结")
        else:
            return restful.params_error(message="账号或者密码错误")

    else:
        errors = form.get_errors()
        # {"password": ['密码长度不能超过20位！', 'xxx'], "telephone": ['xx', 'xx']}
        return restful.params_error(message=errors)
