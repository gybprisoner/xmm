(function(){
   
    var i=0;
    var LIWIDTH=1900;
    var DURATION=500;
    var LICOUNT=2;
    var ulCheck=document.getElementById("new_ul_imgs");
    function moveTo(to){
        if(to==undefined){
            to=i+1;
        }
        if(i==0){
            if(to>i){
                ulCheck.className="transition";
            }else{
                ulCheck.className="";
                ulCheck.style.marginLeft=-LIWIDTH*LICOUNT+"px";
                setTimeout(function(){
                    moveTo(LICOUNT-1);
                },3000);
                return;
            }
        }
        i=to;
        ulCheck.style.marginLeft=-i*LIWIDTH+"px";
        if(i==LICOUNT){
            i=0;
            setTimeout(function(){
                ulCheck.className="";
                ulCheck.style.marginLeft=0;
            },DURATION)
        }
    }


       
        var timer=setInterval(function(){
            moveTo()
        },3000);
        var clientBanner=document.getElementById("swiper_container");
        clientBanner.onmouseover=function(){
            clearInterval(timer);
        }
        clientBanner.onmouseout=function(){
            timer=setInterval(function(){
                moveTo()
            },3000);
        }
   
})()