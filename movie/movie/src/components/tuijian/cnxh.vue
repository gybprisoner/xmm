<template>
<div class="cnxhxx">
    <div class="wxhm">
        <span class="iconfont icon-xinx shishiwuwu"> 猜你喜欢</span>
        <span @click="gengduo">更多></span>
    </div>
    <div>
        <srtc v-for="(item,index) of data3" :key="index" :title="item.title" :subtitle="item.subtitle" :price="item.price" :img="item.img"></srtc>
    </div>

</div>

</template>

<script>
import srtc from './srtc'
export default {
    data() {
        return {
            
        }
    },
    props:["data3"],//父级给的食物数据
    methods: {
        gengduo(){
            this.$router.push("/mvguan");
        },
    },
    components:{
        srtc
    },
}
</script>

<style scoped>
     @import "../../assets/css/cnxh.css";
</style>
