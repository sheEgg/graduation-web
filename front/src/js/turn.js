var timer=null;
var sliderPage = document.getElementsByClassName('sliderPage')[0];
var moveWidth = sliderPage.children[0].offsetWidth;
var num =sliderPage.children.length - 1;
var oSpanArray = document.getElementsByClassName('sliderIndex')[0].getElementsByTagName('span');
var leftBtn = document.getElementsByClassName('leftBtn')[0],
    rightBtn = document.getElementsByClassName('rightBtn')[0];
var lock = true;
var index = 0;

leftBtn.onclick = function () {
    autoMove('right->left');
}
rightBtn.onclick = function () {
    autoMove('left->right');
}

for(i=0;i<oSpanArray.length;i++){
    (function(myIndex){
        oSpanArray[i].onclick =function (){
            // alert(myIndex);
            lock=false;
            clearTimeout(timer);
            index=myIndex;
            startMove(sliderPage,{left: -index*moveWidth},function(){
                lock=true;
                timer = setTimeout(autoMove,1500);
                changeIndex(index);
            })
        }
    })(i)

}
//direction改变图片轮播方向,默认方向是从左到右
//点击left按钮 会从右往左
function autoMove(direction){
    //会出现定时器争抢的现象，因为往左往右的函数都要调用这个函数
    // 所以就在每次开始运动之前开启定时器
    if (lock){
        lock = false;
        clearTimeout(timer);
        if(!direction || direction == 'left->right'){
            index++;
            startMove(sliderPage,{left:sliderPage.offsetLeft - moveWidth},function(){
                if(sliderPage.offsetLeft == -num * moveWidth){
                    sliderPage.style.left = '0px';
                    index = 0;
                }
                timer = setTimeout(autoMove,1500);
                lock = true;
                changeIndex(index);
            });
        }else if(direction == 'right->left'){
            if(sliderPage.offsetLeft == 0){
                sliderPage.style.left = -num * moveWidth + 'px';
                index = num;
            }
            index--;
            startMove(sliderPage,{left:sliderPage.offsetLeft + moveWidth},function(){
                timer = setTimeout(autoMove,1500);
                lock = true;
                changeIndex(index);
            })
        }
    }
}
function changeIndex(_index){
    for(var i=0;i<oSpanArray.length;i++){
        oSpanArray[i].className='';
        oSpanArray[_index].className = 'active';
    }
}
timer = setTimeout(autoMove,1500);