//年龄
(function () {
    var data = ['0-1岁','2-4岁','5-9岁','10-14岁','15-18岁','19-24岁','25-30岁','31-40岁','41-50岁','51-60岁','61-70岁','71-80岁','81-100岁'];
    var data1 = ['45','23','65','45','54','45','56','86','67','43','34','5','3'];
    var data2 = ['23','44','24','34','23','23','23','15','5','14','25','57','5'];
    for (var i = 0; i < data.length; i++) {
        if (data[i] === '81-100岁') {
            data[i] = {
                value: '81-100岁',
                textStyle: {
                    color: '#3399cc'
                }
            }
        }
    }
    var myChart = echarts.init(document.getElementsByClassName('ageEchart')[0]);
    var option = {
        title: {
            text: '社区年龄、性别构成表',
            subtext: '男：750人\n女：450人',
            left: 10,
            top: 0
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            }
        },
        legend: {
            left: '83%',
            top: '0px',
            data: ['男性', '女性']
        },
        xAxis: {
            name:'年龄',
            triggerEvent: true,
            data: data,
            nameTextStyle: {
                "color": "#AEA4A8"
            },
            axisLabel: {
                interval: 0,
                show: true,
                textStyle: {
                    color: "#B4B5BE"
                }
            },
            axisLine: {
                lineStyle: {
                    show: false,
                    color: "#ddd",
                    width: 2
                }
            }
        },
        yAxis: [{
            name: '人数',
            type: 'value',
            nameTextStyle: {
                "color": "#AEA4A8"
            },
            axisLabel: {
                interval: 0,
                show: true,
                textStyle: {
                    color: "#B4B5BE"
                }
            },
            axisLine: {
                lineStyle: {
                    color: "#ddd",
                    width: 2
                }
            },
            splitLine: {
                lineStyle: {
                    color: "#ddd",
                    width: 2
                }
            }
        },
            {
                nameTextStyle: {
                    "color": "#AEA4A8"
                },
                axisLabel: {
                    interval: 0,
                    show: false,
                    textStyle: {
                        color: "#B4B5BE"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "#ddd",
                        width: 2
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: "#ddd",
                        width: 2
                    }
                }

            }
        ],
        series: [{
            name: '男性',
            type: 'bar',
            silent: true,
            itemStyle: {
                normal: {
                    color: '#3399cc'
                }
            },
            data: data1
        }, {
            name: '女性',
            type: 'bar',
            silent: true,
            itemStyle: {
                normal: {
                    color: '#f39c12'
                }
            },
            data:data2
        }]
    };
    myChart.on('click', function(param) {
        for (var i = 0; i < data.length; i++) {
            if (data[i] == param.value || data[i].value == param.value) {
                data[i] = {
                    value: param.value,
                    textStyle: {
                        color: '#3399cc'
                    }
                }
            } else {
                if (typeof data[i] == 'object') {
                    if ("textStyle" in data[i]) {
                        delete data[i].textStyle;
                    }
                }
            }
        }
        option.xAxis.data = data;
        myChart.setOption(option);
        provName = param.value;
        var list = ["chart41", "chart42", "chart51", "chart52"];
        refreshPage("sDate", "eDate", "selInterval", editControl, list, {
            "prov_code": getProvCode(param.value)
        });
    });
    myChart.setOption(option);
})();
//文化程度
(function () {
    var data = ['文盲','小学','初中','高中','中专','大专','本科','硕士','博士及以上'];
    var data1 = ['45','55','88','100','54','45','56','8','6'];
    var data2 = ['23','70','50','93','23','23','23','10','5'];
    for (var i = 0; i < data.length; i++) {
        if (data[i] === '文盲') {
            data[i] = {
                value: '文盲',
                textStyle: {
                    color: '#3399cc'
                }
            }
        }
    }
    var myChart = echarts.init(document.getElementsByClassName('eduEchart')[0]);
    var option = {
        title: {
            text: '社区文化程度、性别构成表',
            subtext: '男：750人\n女：450人',
            left: 10,
            top: 0
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            }
        },
        legend: {
            left: '83%',
            top: '0px',
            data: ['男性', '女性']
        },
        xAxis: {
            name:'文化程度',
            triggerEvent: true,
            data: data,
            nameTextStyle: {
                "color": "#AEA4A8"
            },
            axisLabel: {
                interval: 0,
                show: true,
                textStyle: {
                    color: "#B4B5BE"
                }
            },
            axisLine: {
                lineStyle: {
                    show: false,
                    color: "#ddd",
                    width: 2
                }
            }
        },
        yAxis: [{
            name: '人数',
            type: 'value',
            nameTextStyle: {
                "color": "#AEA4A8"
            },
            axisLabel: {
                interval: 0,
                show: true,
                textStyle: {
                    color: "#B4B5BE"
                }
            },
            axisLine: {
                lineStyle: {
                    color: "#ddd",
                    width: 2
                }
            },
            splitLine: {
                lineStyle: {
                    color: "#ddd",
                    width: 2
                }
            }
        },
            {
                nameTextStyle: {
                    "color": "#AEA4A8"
                },
                axisLabel: {
                    interval: 0,
                    show: false,
                    textStyle: {
                        color: "#B4B5BE"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "#ddd",
                        width: 2
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: "#ddd",
                        width: 2
                    }
                }

            }
        ],
        series: [{
            name: '男性',
            type: 'bar',
            silent: true,
            itemStyle: {
                normal: {
                    color: '#3399cc'
                }
            },
            data: data1
        }, {
            name: '女性',
            type: 'bar',
            silent: true,
            itemStyle: {
                normal: {
                    color: '#f39c12'
                }
            },
            data:data2
        }]
    };
    myChart.on('click', function(param) {
        for (var i = 0; i < data.length; i++) {
            if (data[i] == param.value || data[i].value == param.value) {
                data[i] = {
                    value: param.value,
                    textStyle: {
                        color: '#3399cc'
                    }
                }
            } else {
                if (typeof data[i] == 'object') {
                    if ("textStyle" in data[i]) {
                        delete data[i].textStyle;
                    }
                }
            }
        }
        option.xAxis.data = data;
        myChart.setOption(option);
        provName = param.value;
        var list = ["chart41", "chart42", "chart51", "chart52"];
        refreshPage("sDate", "eDate", "selInterval", editControl, list, {
            "prov_code": getProvCode(param.value)
        });
    });
    myChart.setOption(option);
})();
//家庭结构
(function () {
    var colorList =['#228c38', '#3399cc', '#b04b07', '#af8108', '#f39c12'];
    var colorListSub =['rgba(35,143,56,.5)', 'rgba(51,153,204,.5)', 'rgba(176,75,7,.5)', 'rgba(175,129,8,.5)','rgba(243,156,18,.5)'];
    var myChart = echarts.init(document.getElementsByClassName('familyEchart')[0]);
    var option = {
        title: {
            text: '社区家庭结构构成图',
            subtext: '家庭总数：180'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c}个 ({d}%)"
        },
        legend: {
            orient: 'vertical',
            textStyle:{
                color:'#424242'
            },
            x: 'right',
            data:['单亲','核心','主干','联合','其他']
        },
        series: [
            {
                type:'pie',
                radius: ['8%', '40%'],
                minAngle: 60,
                roseType: 'radius',
                clockwise :false,
                z:10,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            return colorList[params.dataIndex]
                        },
                        shadowBlur: 20,
                        shadowColor: 'rgba(0, 0, 0, 0.3)'
                    }
                },
                label: {
                    normal: {
                        formatter: function(params){
                            // return '{b|'+params.name+'}\n'+params.value+'度({per|'+params.percent+'%})  '
                            var str = ''
                            switch(params.name){
                                case '单亲':str = '{a|'+params.name+'}\n\n{pera|'+params.value+'个 ('+params.percent+'%)}';break;
                                case '核心':str = '{b|'+params.name+'}\n\n{perb|'+params.value+'个 ('+params.percent+'%)}';break;
                                case '主干':str = '{c|'+params.name+'}\n\n{perc|'+params.value+'个 ('+params.percent+'%)}';break;
                                case '联合':str = '{d|'+params.name+'}\n\n{perd|'+params.value+'个 ('+params.percent+'%)}';break;
                                case '其他':str = '{e|'+params.name+'}\n\n{pere|'+params.value+'个 ('+params.percent+'%)}';break;
                            }
                            return str
                        },
                        rich: {
                            a: {
                                color: '#fff',
                                backgroundColor: colorList[0],
                                padding: [1, 5],
                                lineHeight: 30,
                                fontSize: 12,
                                height: 30,
                                borderRadius: 10
                            },
                            b: {
                                color: '#fff',
                                backgroundColor: colorList[1],
                                padding: [1, 5],
                                lineHeight: 30,
                                fontSize: 12,
                                height: 30,
                                borderRadius: 10
                            },
                            c: {
                                color: '#fff',
                                backgroundColor: colorList[2],
                                padding: [1, 5],
                                lineHeight: 30,
                                fontSize: 12,
                                height: 30,
                                borderRadius: 10
                            },
                            d: {
                                color: '#fff',
                                backgroundColor: colorList[3],
                                padding: [1, 5],
                                lineHeight: 30,
                                fontSize: 12,
                                height: 30,
                                borderRadius: 10
                            },
                            e: {
                                color: '#424242',
                                backgroundColor: colorList[4],
                                padding: [1, 5],
                                lineHeight: 30,
                                fontSize: 12,
                                height: 30,
                                borderRadius: 10
                            },
                            pera: {
                                color: '#424242',
                                backgroundColor: colorListSub[0],
                                padding: [2, 5],
                                lineHeight: 30,
                                fontSize: 12,
                                height: 30,
                                borderRadius: 15
                            },
                            perb: {
                                color: '#424242',
                                backgroundColor: colorListSub[1],
                                lineHeight: 30,
                                fontSize: 12,
                                height: 30,
                                padding:[2,5],
                                borderRadius: 15
                            },
                            perc: {
                                color: '#424242',
                                backgroundColor: colorListSub[2],
                                lineHeight: 30,
                                fontSize: 12,
                                height: 30,
                                padding:[2,5],
                                borderRadius: 15
                            },
                            perd: {
                                color: '#424242',
                                backgroundColor: colorListSub[3],
                                lineHeight: 30,
                                fontSize: 12,
                                height: 30,
                                padding:[2,5],
                                borderRadius: 15
                            },
                            pere: {
                                color: '#424242',
                                backgroundColor: colorListSub[4],
                                lineHeight: 30,
                                fontSize: 12,
                                height: 30,
                                padding:[2,5],
                                borderRadius: 15
                            }
                        }
                    }
                },
                labelLine: {
                    normal: {
                        length: 20,
                        length2: 40,
                        lineStyle:{
                            width:1,
                        }
                    }
                },
                data:[
                    {value:10, name:'单亲'},
                    {value:44, name:'核心'},
                    {value:50, name:'主干'},
                    {value:56, name:'联合'},
                    {value:20, name:'其他'}
                ]
            },
            // 边框的设置
            {
                radius: ['8%', '10%'],
                minAngle: 60,
                type: 'pie',
                clockwise :false,
                z:11,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                animation: false,
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = ['#165f3d', '#15458c', '#563527', '#594f27'];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data:[
                    {value:10, name:'未婚'},
                    {value:44, name:'已婚'},
                    {value:50, name:'离婚'},
                    {value:56, name:'再婚'},
                    {value:20, name:'丧偶'}
                ]
            },
            // 中心的圆圈
            {
                radius: ['48%', '48.3%'],
                type: 'pie',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                tooltip: {
                    show: false
                },
                data: [{
                    value: 180,
                    name: '社区家庭总量',
                    itemStyle: {
                        normal: {
                            color: '#424242',
                        }
                    }
                }],
                animation: false
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
})();
//婚姻状况
(function () {
    var colorList =['#228c38', '#3399cc', '#b04b07', '#af8108', '#f39c12'];
    var colorListSub =['rgba(35,143,56,.5)', 'rgba(51,153,204,.5)', 'rgba(176,75,7,.5)', 'rgba(175,129,8,.5)','rgba(243,156,18,.5)'];
    var myChart = echarts.init(document.getElementsByClassName('marryEchart')[0]);
    var option = {
        title: {
            text: '社区婚姻状况构成图',
            subtext: '总人数：1200'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c}人 ({d}%)"
        },
        legend: {
            orient: 'vertical',
            textStyle:{
                color:'#424242'
            },
            x: 'right',
            data:['未婚','已婚','离婚','再婚','丧偶']
        },
        series: [
            {
                type:'pie',
                radius: ['8%', '40%'],
                minAngle: 68,
                roseType: 'radius',
                clockwise :false,
                z:10,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            return colorList[params.dataIndex]
                        },
                        shadowBlur: 20,
                        shadowColor: 'rgba(0, 0, 0, 0.3)'
                    }
                },
                label: {
                    normal: {
                        formatter: function(params){
                            // return '{b|'+params.name+'}\n'+params.value+'度({per|'+params.percent+'%})  '
                            var str = ''
                            switch(params.name){
                                case '未婚':str = '{a|'+params.name+'}\n\n{pera|'+params.value+'人 ('+params.percent+'%)}';break;
                                case '已婚':str = '{b|'+params.name+'}\n\n{perb|'+params.value+'人 ('+params.percent+'%)}';break;
                                case '离婚':str = '{c|'+params.name+'}\n\n{perc|'+params.value+'人 ('+params.percent+'%)}';break;
                                case '再婚':str = '{d|'+params.name+'}\n\n{perd|'+params.value+'人 ('+params.percent+'%)}';break;
                                case '丧偶':str = '{e|'+params.name+'}\n\n{pere|'+params.value+'人 ('+params.percent+'%)}';break;
                            }
                            return str
                        },
                        rich: {
                            a: {
                                color: '#fff',
                                backgroundColor: colorList[0],
                                padding: [1, 5],
                                lineHeight: 30,
                                fontSize: 12,
                                height: 30,
                                borderRadius: 10
                            },
                            b: {
                                color: '#fff',
                                backgroundColor: colorList[1],
                                padding: [1, 5],
                                lineHeight: 30,
                                fontSize: 12,
                                height: 30,
                                borderRadius: 10
                            },
                            c: {
                                color: '#fff',
                                backgroundColor: colorList[2],
                                padding: [1, 5],
                                lineHeight: 30,
                                fontSize: 12,
                                height: 30,
                                borderRadius: 10
                            },
                            d: {
                                color: '#fff',
                                backgroundColor: colorList[3],
                                padding: [1, 5],
                                lineHeight: 30,
                                fontSize: 12,
                                height: 30,
                                borderRadius: 10
                            },
                            e: {
                                color: '#424242',
                                backgroundColor: colorList[4],
                                padding: [1, 5],
                                lineHeight: 30,
                                fontSize: 12,
                                height: 30,
                                borderRadius: 10
                            },
                            pera: {
                                color: '#424242',
                                backgroundColor: colorListSub[0],
                                padding: [2, 5],
                                lineHeight: 30,
                                fontSize: 12,
                                height: 30,
                                borderRadius: 15
                            },
                            perb: {
                                color: '#424242',
                                backgroundColor: colorListSub[1],
                                lineHeight: 30,
                                fontSize: 12,
                                height: 30,
                                padding:[2,5],
                                borderRadius: 15
                            },
                            perc: {
                                color: '#424242',
                                backgroundColor: colorListSub[2],
                                lineHeight: 30,
                                fontSize: 12,
                                height: 30,
                                padding:[2,5],
                                borderRadius: 15
                            },
                            perd: {
                                color: '#424242',
                                backgroundColor: colorListSub[3],
                                lineHeight: 30,
                                fontSize: 12,
                                height: 30,
                                padding:[2,5],
                                borderRadius: 15
                            },
                            pere: {
                                color: '#424242',
                                backgroundColor: colorListSub[4],
                                lineHeight: 30,
                                fontSize: 12,
                                height: 30,
                                padding:[2,5],
                                borderRadius: 15
                            }
                        }
                    }
                },
                labelLine: {
                    normal: {
                        length: 20,
                        length2: 40,
                        lineStyle:{
                            width:1,
                        }
                    }
                },
                data:[
                    {value:300, name:'未婚'},
                    {value:350, name:'已婚'},
                    {value:150, name:'离婚'},
                    {value:200, name:'再婚'},
                    {value:100, name:'丧偶'}
                ]
            },
            // 边框的设置
            {
                radius: ['8%', '10%'],
                minAngle: 68,
                type: 'pie',
                clockwise :false,
                z:11,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                animation: false,
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = ['#165f3d', '#15458c', '#563527', '#594f27'];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data:[
                    {value:300, name:'未婚'},
                    {value:350, name:'已婚'},
                    {value:150, name:'离婚'},
                    {value:200, name:'再婚'},
                    {value:100, name:'丧偶'}
                ]
            },
            // 中心的圆圈
            {
                radius: ['48%', '48.3%'],
                type: 'pie',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                tooltip: {
                    show: false
                },
                data: [{
                    value: 1200,
                    name: '社区人数总量',
                    itemStyle: {
                        normal: {
                            color: '#424242',
                        }
                    }
                }],
                animation: false
            }
        ]
    };
    myChart.setOption(option);
})();


