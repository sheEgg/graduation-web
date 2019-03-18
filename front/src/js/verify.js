// 校验要求：
//     1.每一项都必须填写内容或者做出选择，不能存在空项；+++++++++
//
//
//     2.用户名：开头不能为数字,只能包含字母和数字，长度为6-20个字符；++++++++
//
//
//     3.密码：必须包含英文字母大小写和数字，长度不能少于6个字符；++++++
//     4.确认密码：必须与密码相同；
//
//
//     5.联系电话：确保手机号码的有效性；+++++++++
//
//     6.如果用户没有按照以上要求输入信息，则当光标离开该项时，用红色字体给出相应的提示信息。++++++

// 初始化
var oLoginUser = document.getElementById('loginUser'),
    oLoginPassword = document.getElementById('loginPassword'),
    oResignUser = document.getElementById('resignUser'),
    oResignPassword = document.getElementById('resignPassword'),
    oFindPassword = document.getElementById('findPassword'),
    oResignRePassword= document.getElementById('resignRePassword'),
    oRePassword = document.getElementById('rePassword'),
    oResignPhone = document.getElementById("resignPhone"),
    oPhoneNumber = document.getElementById('phoneNumber');
var error1 = document.getElementById('error1'),
    error2 = document.getElementById('error2'),
    error3 = document.getElementById('error3'),
    error4 = document.getElementById('error4'),
    error5 = document.getElementById('error5'),
    error6 = document.getElementById('error6'),
    error7 = document.getElementById('error7'),
    error8 = document.getElementById('error8'),
    error9 = document.getElementById('error9');
//    用户名
function nameVerify(obj,error) {
    var re = /[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/;
    if (obj.value.length === 0) {
        error.innerText = "用户名不能为空！";
    } else if (obj.value.charCodeAt(0) >= 48 && obj.value.charCodeAt(0) <= 57) {
        error.innerText = "用户名开头不能为数字！";
    } else if (obj.value.length > 20 || obj.value.length < 6) {
        error.innerText = "用户名长度必须在6~20位之间";
    } else if(!re.test(obj.value)){
        error.innerText = "用户名只能包含字母和数字";
    } else{
        error.innerText = '';
    }
    return false;
}

// 密码
function passwordVerify(obj,error) {
    var re = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z]{6,}$/;
    if (obj.value === "") {
        error.innerText = "密码不能为空！";
    }else if(obj.value.length < 6) {
        error.innerText = "密码不能少于6位！";
    } else if(!re.test(obj.value)){
        error.innerText = "密码必须包含大小写英文字母和数字";
    }else{
        error.innerText = '';
    }
    return false;
}

//确认密码
function confirmPassword(pw1,pw2,error) {
    if(pw1.value.length === 0){
        error.innerText = "密码不能为空！";
    }
    else if(pw1.value !== pw2.value){
        error.innerText = "两次密码输入不一致";
    }else{
        error.innerText = '';
    }
    return false;
}

//手机号
function phoneVerify(number,error){
    // 为兼容以后电话号码增加的情况，只验证以1开头
    var re =/^1\d{10}$/;
    if(number.value ===""){
        error.innerText = "手机号不能为空!";
    }else if(number.value.length !== 11){
        error.innerText = '请输入11位有效的手机号码！';
    }else if(!re.test(number.value)){
        error.innerText = "电话格式输入错误";
    }else{
        error.innerText = '';
    }
    return false;
}
// 鼠标聚焦时清除错误提示
function clearError(error) {
    error.innerText = '';
}
//获取验证码点击事件
var count = 60;
var interval = null;
window.onload = function (btn){
    btn.onclick = function () {
        if (!interval) {
            this.style.width = '91px';
            this.style.border = '1px solid #347ebc';
            this.style.background = 'transparent';
            this.style.color = '#347ebc';
            this.style.disabled = 'disabled';
            this.style.cursor = "wait";
            this.value = "重新发送 (" + count-- + "s)";
            interval = setInterval (function ()
            {
                if (count == 0)
                {
                    if (!!interval)
                    {
                        clearInterval (interval);
                        interval = null;
                        count = 60;
                        btn.style.width = '69px';
                        btn.style.color = '#fff';
                        btn.style.cursor = "pointer";
                        btn.style.background = '#347ebc';
                        btn.removeAttribute ('disabled');
                        btn.value = "获取验证码";
                    }
                    return false;
                }
                btn.value = "重新发送 (" + count-- + "s)";
            }, 1000);
        }
    }
};
var rebtn = document.getElementById('re-checkCode');
window.onload(rebtn);
var fibtn = document.getElementById('fi-checkCode');
window.onload(fibtn);