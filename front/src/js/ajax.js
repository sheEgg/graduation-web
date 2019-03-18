var oBtn1 = document.getElementById('btn1');
oBtn1.onclick = function (e) {
    e.preventDefault();
    var data = 'loginUser=' + oLoginUser.value +'&loginPassword=' + oLoginPassword.value;
    ajaxFunc('POST','../post.php',data,showData,true);
};

var oReset = document.getElementById('reset');
oReset.onclick = function (e) {
    e.preventDefault();
    var data = 'resignUser=' + oResignUser.value +'&resignPhone=' + oResignPhone.value +'&resignRePassword=' + oResignRePassword.value;
    ajaxFunc('POST','../post.php',data,showData,true);
};

var oFind = document.getElementById('find');
oFind.onclick = function (e) {
    e.preventDefault();
    var data = 'phoneNumber=' + oPhoneNumber.value +'&rePassword=' + oRePassword.value;
    ajaxFunc('POST','../post.php',data,showData,true);
};


function ajaxFunc(method,url,data,callback,flag){
    var xhr = null;//创建一个ajax对象
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else {
        xhr = new ActiveXObject('Microsoft.XMLHttp');//兼容ie
    }
    method = method.toUpperCase();//将传进来的方法的小写都变为大写，增强用户体验
    if( method === 'GET') {
        xhr.open(method,url + data,flag);
        xhr.send();
    } else if (method === 'POST')  {
        xhr.open(method,url,flag);
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
        xhr.send(data);//固定传参
    }
    //状态改变触发器
    xhr.onreadystatechange = function () {
        if( xhr.readyState === 4) {
            if(xhr.status === 200){
                callback(xhr.responseText);
            }
        }
    }
}
function showData() {
    alert(data);
}
