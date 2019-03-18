function Auth() {

}

// 监听登录事件
Auth.prototype.listenLoginEvent = function () {
    var self = this;
    var login = $('.login-box-body');
    var telephoneInput = login.find("input[name='telephone']");
    var passwordInput = login.find("input[name='password']");
    var rememberInput = login.find("input[name='remember']");
    var submitBtn = $('#btn1');

    submitBtn.click(function () {
        var telephone = telephoneInput.val();
        var password = passwordInput.val();
        var remember = rememberInput.prop('checked');
        console.log('click');

        yskajax.post({
            'url': '/account/login/',
            'data': {
               'telephone': telephone,
                'password': password,
                'remember': remember?1:0
            },
            'success': function (result) {
                console.log('success');
            }
        });
    });
};

Auth.prototype.run = function () {
    var self = this;
    self.listenLoginEvent();
};

$(function () {
    var auth = new Auth();
    auth.run();
});