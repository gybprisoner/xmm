<template>
    <div class="srtcqq" @click="swxq">
        <div class="bmhtp"><img :src="require(`../../assets/index/shiwu/${img}`)" alt=""> </div>
        <div class="www">
            <p>{{title}}</p>
            <p>{{subtitle}}</p>
            <p>网购价：￥{{price.toFixed(2)}}</p>
        </div>
        <div class="rgd iconfont icon-qitalunbotupian_you" @click="shiwujin"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props:["title","subtitle","price","img"],//父级给的数据
    methods: {
        shiwujin(){
        },
        swxq(){
            this.$router.push("/mvswxq")
        }
    },
}
</script>
<style scoped>
    
     @import "../../assets/css/srtc.css";
</style>

