<template>
<div class="zcd">
        <div class="rysy"><span class="yangsp">正在热映</span><span class="">即将上映</span><span>更多></span></div>
        
        <router-link :to="`dyxq`">
        <div class="hmfa">
        <div class="zzry">
            <ul class="zzry_ul" :style="`width:${data1.length*34}%;`">
                
                <li v-for="(item,index) of data1" :key="index" @click="www(item.id)">
                    <div><img :src="require(`../../assets/index/zhengzai/${item.img}`)" alt=""></div>
                    <p>{{item.title}}</p>
                </li>
            </ul>
        </div>
       
        <div class="jjsy">
            <ul class="jjsy_ul" :style="`width:${data2.length*34}%;`">
                 <li v-for="(item,index) of data2" :key="index" @click="www2(item.id)">
                    <div><img :src="require(`../../assets/index/jijiang/${item.img}`)" alt=""></div>
                    <p>{{item.title}}</p>
                </li>
            </ul>
        </div>
        </div>
        </router-link>
</div>

</template>

<script>
export default {
    data() {
        return {
            yun:1
        }
    },
    props:["data1","data2"],//正在上映/即将上映
    methods: {
        www(rua){
            //console.log(item.id)
            this.yun=rua;
           sessionStorage.setItem("vv",rua)
            
        },
        www2(rua){
           this.yun=rua;
           sessionStorage.setItem("vv",rua)
          
        }
    },
    mounted(){
    var rysy=document.getElementsByClassName("rysy")[0];
    var asp=rysy.getElementsByTagName("span");
    var mfdd=document.getElementsByClassName("hmfa")[0];
    var aul=document.getElementsByClassName("zzry_ul")[0];
    var ali=aul.getElementsByTagName("li");
    var bul=document.getElementsByClassName("jjsy_ul")[0];
    var bli=bul.getElementsByTagName("li");

    for(var i=0;i<2;i++){
        asp[i].index=i;
        asp[i].onclick=function(){
            for(var i=0;i<2;i++)asp[i].className="";
            this.className="yangsp";
            mfdd.style.left=-this.index*100+"%";
        }
    }
    function getstyle(dq, ys){
    if(dq.currentStyle){
        return dq.currentStyle[ys];
        }
    else{
        return getComputedStyle(dq,false)[ys];
        }
    };

    function qwq(dq,json,sdd,fnend){
        clearInterval(dq.tz);
        dq.tz=setInterval(function(){
            var bstop=true;
        for(var ys in json){
            var cur=0;
            if(ys=='opacity'){
                cur=Math.round(parseFloat(getstyle(dq,ys))*100);
                }
            else{
                cur=parseInt(getstyle(dq,ys));
                }
            var speed=(json[ys]-cur)/sdd;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
                
                if(cur!=json[ys])bstop=false;
                
                if(ys=='opacity'){
                    dq.style.opacity=(cur+speed)/100;
                    }
                else{
                    dq.style[ys]=cur+speed+'px';
                    }
                }
                if(bstop){
                    clearInterval(dq.tz);
                    if(fnend)fnend();
                    }		
            },6);
        };
        var kankw=0;
        var xpx=0;
    aul.addEventListener('touchstart',function(event){
        xpx=0;
        //var evt = window.event||event;
        var zwbj=aul.offsetLeft;
        var e=event.targetTouches[0]
        var wx=e.clientX;
        var nono=0;
    aul.addEventListener('touchmove',function(event){
        event.preventDefault();
        var e=event.targetTouches[0];
        nono=e.clientX;
        xpx=wx-nono
        aul.style.left=-xpx+zwbj+'px';
        })
    });
    aul.addEventListener("touchend",function(){
        var mmhh=aul.offsetWidth-rysy.offsetWidth;
        if(aul.offsetLeft>0){
            qwq(aul,{left:0},22);
        }
        else if(-aul.offsetLeft>mmhh){
            qwq(aul,{left:-mmhh},22);
        }else{
            if(aul.offsetLeft-xpx*8>0){
                qwq(aul,{left:0},22);
            }else if(aul.offsetLeft-xpx*8<-(aul.offsetWidth-rysy.offsetWidth)){
                qwq(aul,{left:-mmhh},22)
            }else{
                qwq(aul,{left:parseInt(aul.offsetLeft-xpx*8)},22)
            }
        }
    });
    //下面那个ul
    bul.addEventListener('touchstart',function(event){
        xpx=0;
        var zwbj=bul.offsetLeft-rysy.offsetWidth;
        var e=event.targetTouches[0]
        var wx=e.clientX;
        var nono=0;
    bul.addEventListener('touchmove',function(event){
        event.preventDefault();
        var e=event.targetTouches[0];
        nono=e.clientX;
        xpx=wx-nono;
        bul.style.left=-xpx+zwbj+'px';
        })
    });
    bul.addEventListener("touchend",function(){
        var mmhh=bul.offsetWidth-rysy.offsetWidth;
        if(bul.offsetLeft-rysy.offsetWidth>0){
            qwq(bul,{left:0},22);
        }
        else if(bul.offsetLeft-rysy.offsetWidth<-mmhh){
            qwq(bul,{left:-mmhh},22);
        }else{
            if(bul.offsetLeft-rysy.offsetWidth-xpx*4>0){
                qwq(bul,{left:0},22);
                }
            else if(bul.offsetLeft-rysy.offsetWidth-xpx*4<-(mmhh)){
                qwq(bul,{left:-mmhh},22)
            }
            else{
                qwq(bul,{left:parseInt(bul.offsetLeft-rysy.offsetWidth-xpx*4)},22)}
            }
    })


    },
}
</script>

<style scoped>
    @import "../../assets/css/cnm.css";
</style>
