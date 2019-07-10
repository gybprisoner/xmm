<template>
    <div class="ani4">
        <div class="erweima">
            <div>
            <p class="p1 icon-refresh iconfont" @click="shuaxin" :style="yanse"></p>
            <p>微信扫码支付</p>
            <p index=1 class="iconfont icon-cuo3 p2" ></p>
            </div>
            <div class="imgg">
                <img :src="require(`../assets/erweima/${img}.jpg`)" alt="">
            </div>
            
        </div>
    
    </div>
</template>

<script>
export default {
    data(){
        return {
            // show:true,
            img:"0",
            yanse:{
                color:"#f00"
            },
        }
    },
   
    methods:{
        shuaxin(){
            this.img++
            if(this.img>3){
                this.img=0
            };
            this.yanse.color=`rgb(${Math.floor(Math.random()*226)},${Math.floor(Math.random()*226)},${Math.floor(Math.random()*226)})`
        }
    },
}
</script>

<style scoped>
    @import "../assets/css/erweima.css";
</style>
