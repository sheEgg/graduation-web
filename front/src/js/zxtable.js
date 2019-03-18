(function innit() {
    var zxpatient = [
        {"id": 20180101, "name": "李富贵", "sex": "男", "phone": 15236478900, "date": "2018/12/31", "kind": "高血压体脂肪检查"},
        {"id": 20180102, "name": "曾宝强", "sex": "男", "phone": 15236478900, "date": "2018/12/25", "kind": "糖尿病空腹血糖检查"},
        {"id": 20180103, "name": "陈飞", "sex": "男", "phone": 15236478900, "date": "2018/12/11", "kind": "幼儿卡介苗接种"},
        {"id": 20180104, "name": "黄丽", "sex": "女", "phone": 15236478900, "date": "2018/12/6", "kind": "孕期B超检查"},
        {"id": 20180105, "name": "王成", "sex": "男", "phone": 15236478900, "date": "2018/12/3", "kind": "骨折之后康复治疗"},
        {"id": 20180106, "name": "吕一丽", "sex": "女", "phone": 15236478900, "date": "2018/11/29", "kind": "乙肝疫苗接种"},
        {"id": 20180107, "name": "卢玉兰", "sex": "女", "phone": 15236478900, "date": "2018/11/19", "kind": "糖尿病肾功能检查"},
        {"id": 20180108, "name": "刘万鹏", "sex": "男", "phone": 15236478900, "date": "2018/11/16", "kind": "高血压康复治疗"},
        {"id": 20180109, "name": "雷乔亚", "sex": "女", "phone": 15236478900, "date": "2018/11/13", "kind": "产后恢复康复治疗"},
    ];
    bind();
    function bind() {
        var tbody = document.getElementById('zxtb');
        var len = zxpatient.length;
        for (var i = 0; i < len; i++) { //遍历一下json数据  
            var trow = getDataRow(zxpatient[i]); //定义一个方法,返回tr数据  
            tbody.appendChild(trow);
        }
    }

    function getDataRow(h) {
        var row = document.createElement('tr'); //创建行  

        var idCell = document.createElement('td'); //创建第一列id  
        idCell.innerHTML = h.id; //填充数据  
        row.appendChild(idCell); //加入行  ，下面类似  

        var nameCell = document.createElement('td');//创建第二列name  
        nameCell.innerHTML = h.name;
        row.appendChild(nameCell);

        var sexCell = document.createElement('td');//创建第三列sex  
        sexCell.innerHTML = h.sex;
        row.appendChild(sexCell);

        var phoneCell = document.createElement('td');
        phoneCell.innerHTML = h.phone;
        row.appendChild(phoneCell);

        var dateCell = document.createElement('td');
        dateCell.innerHTML = h.date;
        row.appendChild(dateCell);

        var kindCell = document.createElement('td');
        kindCell.innerHTML = h.kind;
        row.appendChild(kindCell);
        //到这里，json中的数据已经添加到表格中，下面为每行末尾添加删除按钮  

        var delCell = document.createElement('td');
        row.appendChild(delCell);
        var btnDel = document.createElement('input'); //创建一个input控件  
        btnDel.setAttribute('type', 'button'); //type="button"  
        btnDel.setAttribute('value', '完成并删除');

        //删除操作  
        btnDel.onclick = function () {
            swal({
                title: "确定删除?",
                text: "一旦删除，不能撤销！",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
                        swal("您已成功删除该条数据!", {
                            icon: "success",
                        });
                    } else {
                        swal("您已取消删除数据!");
                    }
                });
        }
        delCell.appendChild(btnDel);  //把删除按钮加入td
        return row; //返回tr数据      
    }
    $("#zxadd").click(function(){
        $("#zxform").show();
    });
    $("#zxclose").click(function(){
        $("#zxform").hide();
    })

    //获取表单中的数据
    $('#zxtable').click(function getElements() {
        var form = document.getElementById('zxtable');
        var elements = new Array();
        var tagElements = form.getElementsByTagName('input');
        for (var j = 0; j < tagElements.length; j++){
            elements.push(tagElements[j]);
        }
        return elements.join('&');
    })
})();