(function innit() {
    var smpatient = [
        {"id": 20180110, "name": "吕一苗", "sex": "女", "phone": 15236478900, "address": "幸福小区一期23栋1102", "date": "9:00", "kind": "糖尿病足换药"},
        {"id": 20180111, "name": "乐健美", "sex": "女", "phone": 15236478900, "address": "幸福小区一期23栋1102", "date": "9:30", "kind": "高血压康复训练"},
        {"id": 20180112, "name": "梁世谨", "sex": "男", "phone": 15236478900, "address": "幸福小区一期23栋1102", "date": "10:00", "kind": "右肢残疾康复训练"},
        {"id": 20180113, "name": "路东飞", "sex": "男", "phone": 15236478900, "address": "幸福小区一期23栋1102", "date": "10:30", "kind": "抑郁症随访"},
        {"id": 20180114, "name": "窦凯", "sex": "男", "phone": 15236478900, "address": "幸福小区一期23栋1102", "date": "11:00", "kind": "卧床病人随访"},
        {"id": 20180115, "name": "毛丽新", "sex": "女", "phone": 15236478900, "address": "幸福小区一期23栋1102", "date": "13:00", "kind": "产妇随访"},
        {"id": 20180116, "name": "孟跃", "sex": "男", "phone": 15236478900, "address": "幸福小区一期23栋1102", "date": "14:30", "kind": "老年痴呆随访"},
        {"id": 20180117, "name": "莫三勇", "sex": "男", "phone": 15236478900, "address": "幸福小区一期23栋1102", "date": "15:30", "kind": "独居老人随访"},
        {"id": 20180118, "name": "慕子吟", "sex": "男", "phone": 15236478900, "address": "幸福小区一期23栋1102", "date": "16:00", "kind": "术后康复训练"},
        {"id": 20180114, "name": "窦凯", "sex": "男", "phone": 15236478900, "address": "幸福小区一期23栋1102", "date": "11:00", "kind": "卧床病人随访"},
    ]
    bind();
    function bind() {
        var tbody = document.getElementById('smtb');
        var len = smpatient.length;
        for (var i = 0; i < len; i++) { //遍历一下json数据  
            var trow = getDataRow(smpatient[i]); //定义一个方法,返回tr数据  
            tbody.appendChild(trow);
        }
    };

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

        var addressCell = document.createElement('td');
        addressCell.innerHTML = h.address;
        row.appendChild(addressCell);

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
    $("#smadd").click(function(){
        $("#smform").show();
    });
    $("#smclose").click(function(){
        $("#smform").hide();
    })
})();