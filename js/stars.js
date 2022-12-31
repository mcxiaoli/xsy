window.onload = function(){
    //-50是为了防止页面出现滚动条
    var x=document.documentElement.clientWidth - 50;
    var y=document.documentElement.clientHeight - 50;

    for (var i=0;i<60;i++){
        var spans = document.createElement('span');
        document.body.appendChild(spans);

        spans.style.left = x * Math.random() + 'px';
        spans.style.top = y * Math.random() + 'px';
        //使星星不同时闪烁
        var randomDelay = Math.random()*2;
        spans.style.animationDelay = randomDelay + 's';
        //使星星大小不一
        var randomRota = Math.random()*1.5;
        spans.style.transform = 'scale('+randomRota+','+randomRota+')';
    }
};