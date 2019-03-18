# 短信验证码
import requests


def send(mobile, captcha):
    url = "http://v.juhe.cn/sms/send"
    params = {
        "mobile": mobile,
        "tpl_id": '125940',
        "tpl_value": "#code#=" + captcha,
        "key": '9ada84f068d5fa558875712199484979'
    }

    response = requests.get(url, params=params)
    result = response.json()
    if result['error_code'] == 0:
        return True
    else:
        return False
