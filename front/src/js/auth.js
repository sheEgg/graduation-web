function Auth() {

}

// 监听登录事件
Auth.prototype.listenLoginEvent = function () {
    var self = this;
    var login = $('.login');
    var telephoneInput = login.find("input[name='telephone']");
    var passwordInput = login.find("input[name='password']");
    var rememberInput = login.find("input[name='remember']");
    var submitBtn = $('#btn1');

    submitBtn.click(function () {
        var telephone = telephoneInput.val();
        var password = passwordInput.val();
        var remember = rememberInput.prop('checked');

        yskajax.post({
            'url': '/account/login/',
            'async': false,
            'data': {
               'telephone': telephone,
                'password': password,
                'remember': remember?1:0
            },
            'success': function (result) {
                if (result['code'] === 200) {
                    window.location.href="http://127.0.0.1:8000/cms/";
                }
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