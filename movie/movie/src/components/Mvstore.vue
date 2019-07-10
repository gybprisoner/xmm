<template>
    <div>
        <div class="store">
            <div class="storeLeft productleft">
                <ul ref="left_ul" >
                    <li @click="li1">优惠套餐</li>
                    <li @click="li2">超值礼包</li>
                    <li @click="li3">食品</li>
                    <li @click="li4">饮品</li>
                </ul>
            </div>
            <div class="beij"></div>

            <div class="storeRightDiv" >
                <div class="storeRight" v-for="(item,index) of data" :key="index" @click="spxq">
                    <div class="rightImg">
                        <img :src="require(`../assets/product/${item.img}`)">
                    </div>
                    <div class="rightWz">
                        <h3>{{item.title}}</h3>
                        <p>{{item.subtitle}}</p>
                        <span>网购价:</span> 
                        <span class="money">￥{{item.price.toFixed(2)}}</span>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import mallhead from "./MallHeader"
export default {
    data() {
        return {
            data:[],//数据
            lili:"",//按钮li
        }
    },
    methods: {
        sum(){//axios请求
            var url="product/product"
            this.axios.get(url)
            .then(result=>{
                this.data=result.data.data;
                // console.log(this.data)
            });
        },
        li1(){//第一个按钮
            var doc=document.documentElement.scrollTop;//获取滚动条位置
            var tt=0;//定时器时间
            var add=0;//增加的数量
            for(var li of this.lili){//清除样式
               li.style.background="rgb(239, 239, 239)";
            }
            this.lili[0].style.background="#fff";
            if(doc>950){
                tt=0
                add=8
            }else{
                tt=5
                add=6
            }
            if(doc>0){//更改位置
                var t=setInterval(function(){
                    doc-=add
                    window.scrollTo(0,doc);//设置滚动条位置
                    if(doc<=0){
                        clearInterval(t)
                    };
                },tt);    
            }else{
               return;
           };
          
        },
        li2(){
            var doc=document.documentElement.scrollTop;
            for(var li of this.lili){
               li.style.background="rgb(239, 239, 239)";
            }
            this.lili[1].style.background="#fff";
           if(doc<330){
                var t=setInterval(function(){
                    doc+=6
                    window.scrollTo(0,doc);
                    if(doc>330){
                        clearInterval(t)
                    }; 
                },5);    
            }else if(doc>340){
                var t=setInterval(function(){
                    doc-=6
                    window.scrollTo(0,doc);
                    if(doc<340){
                        clearInterval(t)
                    }; 
                },5); 
           };
        },
        li3(){
            var doc=document.documentElement.scrollTop;
            for(var li of this.lili){
               li.style.background="rgb(239, 239, 239)";
            }
            this.lili[2].style.background="#fff";
           if(doc<580){
                var t=setInterval(function(){
                    doc+=6
                    window.scrollTo(0,doc);
                    if(doc>580){
                        clearInterval(t)
                    }; 
                },5);    
            }else if(doc>585){
                var t=setInterval(function(){
                    doc-=6
                    window.scrollTo(0,doc);
                    if(doc<580){
                        clearInterval(t)
                    }; 
                },5); 
           };
        },
        li4(){
            var doc=document.documentElement.scrollTop;
            for(var li of this.lili){
               li.style.background="rgb(239, 239, 239)";
            }
            this.lili[3].style.background="#fff";
            var tt=0;
            var add=0;
            if(doc<300){
                tt=0
                add=8
            }else{
                tt=5
                add=6
            }
            if(doc<990){
                 var t=setInterval(function(){
                     doc+=add
                     window.scrollTo(0,doc);
                     if(doc>990){
                         clearInterval(t)
                     }; 
                 },tt);    
             }else{
                 return;
             }
        },
        spxq(){
            this.$router.push("/mvswxq");
        }
    },
    created() {
        this.sum()//调用axios
    },
    mounted(){
        this.lili=this.$refs.left_ul.children;//获得按钮li
        this.lili[0].style.background="#fff";//默认第一个li
    },
    components:{
        mallhead,
    },
}
</script>


<style scoped>
    @import "../assets/css/store.css";
</style>

