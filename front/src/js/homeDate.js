(function init() {
    $.ajax({
        url: '',
        type: 'GET',
        async: 'true',
        data: {
            data: '',
            name: '',
            phone: '',
            des: '',
            kind: '',
        },
        success: function (res) {
            $.each(res.data,function () {
                //处理函数
                //初始变量
                var oUl1 = document.getElementsByClassName('infoWrapper')[1];
                var oInput1 = document.getElementsByClassName('search')[1];
                var store = createStore({text: '', kind: '所有'});
                var lastFilterArr = combineFilter({
                    text: filterArrByText,
                    kind: filterArrByKind,
                });

                store.subscribe(function () {
                    //更新视图
                    renderPage(lastFilterArr(homeArr));
                });
//数据渲染
                function renderPage (data) {
                    //遍历
                    var htmlStr = '';
                    oUl1.innerHTML = '';
                    data.forEach(function (ele, index, self) {
                        // console.log(ele,index,self);
                        htmlStr = htmlStr + '<li class="patientInfo"><p class="date">' + ele.date +'</p><p class="name">' + ele.name +'</p><p class="phone">' + ele.phone +'</p><p class="des">'+ ele.des + '</p></li>';
                        // console.log(htmlStr);
                    });
                    oUl1.innerHTML = htmlStr;
                }
                renderPage(homeArr);

//防抖函数
                function debounce (handler,delay) {
                    var timer = null;
                    return function (e) {
                        var _self = this, _arg = arguments;
                        clearTimeout(timer);
                        timer = setTimeout(function () {
                            handler.apply(_self,_arg);
                        }, delay);
                    }
                }
// 添加行为
                oInput1.oninput = debounce(function () {
                    store.dispatch({type: 'text', value: this.value});
                },500);


//筛选
                var oBtnArr = [].slice.call(document.getElementsByClassName('hBtn'),0);
                var lastActiveBtn = oBtnArr[3];
                oBtnArr.forEach(function (ele,index,self) {
                    ele.onclick = function () {
                        $('.hBtn').removeClass('sActive');
                        $(this).addClass('sActive');
                        store.dispatch({type:'kind', value: this.getAttribute('kind')});
                    }
                });

//文本过滤
                function filterArrByText (data,text) {
                    if (!text) {
                        return data;
                    }else{
                        return data.filter(function (ele,index){
                            //    如果输入的字符连续存在于已有数据中会返回一个不为-1的值
                            return ele.name.indexOf(text) !== -1;
                        });
                    }
                }
//筛选类型
                function filterArrByKind (data,kind) {
                    if (kind === '所有') {
                        return data;
                    }else{
                        return data.filter(function (ele,index,self) {
                            return ele.kind === kind;
                        })
                    }
                }
//理论依据redux状态管理机制
                function combineFilter (config){
                    return function (data) {
                        for (var prop in config) {
                            // console.log(prop,config[prop],state)
                            data = config[prop](data, store.getState(prop));
                        }
                        return data;
                    }
                }
//create store
                function createStore (initialState) {
                    var state = initialState || {};
                    var list = [];
                    function getState (type) {
                        return state[type];
                    }
                    function dispatch (action) {
                        state[action.type] = action.value;
                        //调用之前订阅过的函数
                        list.forEach(function (ele) {
                            ele();
                        })
                    }
                    function subscribe (func) {
                        list.push(func);
                    }
                    return {
                        getState: getState,
                        dispatch: dispatch,
                        subscribe: subscribe
                    }
                }
            });
            console.log(this);//不加 context 时 this 指向url中的对象，加了context，this指向$里的对象
        },
        error: function (e) {
            console.log(e.status,e.statusText);//错误状态码和错误信息
        },
        complete: function () {
            //可以放假数据处理函数
            var homeArr = [
                {date:'9:00',name:'吕一苗',phone:'18388451263',des:'糖尿病足换药',kind:'换药'},
                {date:'9:30',name:'乐健美',phone:'18388451263',des:'高血压康复训练',kind:'康复'},
                {date:'10:00',name:'梁世谨',phone:'18388451263',des:'右肢残疾康复训练',kind:'康复'},
                {date:'10:30',name:'路东飞',phone:'18388451263',des:'抑郁症随访',kind:'随访'},
                {date:'11:00',name:'窦凯',phone:'18388451263',des:'卧床病人随访',kind:'随访'},
                {date:'13:00',name:'毛丽新',phone:'18388451263',des:'产妇随访',kind:'随访'},
                {date:'14:00',name:'孟跃',phone:'18388451263',des:'老年痴呆随访',kind:'随访'},
                {date:'15:30',name:'莫三勇',phone:'18388451263',des:'独居老人随访',kind:'随访'},
                {date:'16:00',name:'慕子吟',phone:'18388451263',des:'术后康复训练',kind:'康复'},
            ];
            //初始变量
            var oUl1 = document.getElementsByClassName('infoWrapper')[1];
            var oInput1 = document.getElementsByClassName('search')[1];
            var store = createStore({text: '', kind: '所有'});
            var lastFilterArr = combineFilter({
                text: filterArrByText,
                kind: filterArrByKind,
            });

            store.subscribe(function () {
                //更新视图
                renderPage(lastFilterArr(homeArr));
            });
//数据渲染
            function renderPage (data) {
                //遍历
                var htmlStr = '';
                oUl1.innerHTML = '';
                data.forEach(function (ele, index, self) {
                    // console.log(ele,index,self);
                    htmlStr = htmlStr + '<li class="patientInfo"><p class="date">' + ele.date +'</p><p class="name">' + ele.name +'</p><p class="phone">' + ele.phone +'</p><p class="des">'+ ele.des + '</p></li>';
                    // console.log(htmlStr);
                });
                oUl1.innerHTML = htmlStr;
            }
            renderPage(homeArr);

//防抖函数
            function debounce (handler,delay) {
                var timer = null;
                return function (e) {
                    var _self = this, _arg = arguments;
                    clearTimeout(timer);
                    timer = setTimeout(function () {
                        handler.apply(_self,_arg);
                    }, delay);
                }
            }
// 添加行为
            oInput1.oninput = debounce(function () {
                store.dispatch({type: 'text', value: this.value});
            },500);


//筛选
            var oBtnArr = [].slice.call(document.getElementsByClassName('hBtn'),0);
            var lastActiveBtn = oBtnArr[3];
            oBtnArr.forEach(function (ele,index,self) {
                ele.onclick = function () {
                    $('.hBtn').removeClass('sActive');
                    $(this).addClass('sActive');
                    store.dispatch({type:'kind', value: this.getAttribute('kind')});
                }
            });

//文本过滤
            function filterArrByText (data,text) {
                if (!text) {
                    return data;
                }else{
                    return data.filter(function (ele,index){
                        //    如果输入的字符连续存在于已有数据中会返回一个不为-1的值
                        return ele.name.indexOf(text) !== -1;
                    });
                }
            }
//筛选类型
            function filterArrByKind (data,kind) {
                if (kind === '所有') {
                    return data;
                }else{
                    return data.filter(function (ele,index,self) {
                        return ele.kind === kind;
                    })
                }
            }
//理论依据redux状态管理机制
            function combineFilter (config){
                return function (data) {
                    for (var prop in config) {
                        // console.log(prop,config[prop],state)
                        data = config[prop](data, store.getState(prop));
                    }
                    return data;
                }
            }
//create store
            function createStore (initialState) {
                var state = initialState || {};
                var list = [];
                function getState (type) {
                    return state[type];
                }
                function dispatch (action) {
                    state[action.type] = action.value;
                    //调用之前订阅过的函数
                    list.forEach(function (ele) {
                        ele();
                    })
                }
                function subscribe (func) {
                    list.push(func);
                }
                return {
                    getState: getState,
                    dispatch: dispatch,
                    subscribe: subscribe
                }
            }
        },
        context: $('.wrapper')
    });

})();
