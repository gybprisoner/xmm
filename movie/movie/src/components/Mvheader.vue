<template>
    <div>
        <div class="yy_top">
            <div class="iconfont icon-lunbo-jiantouzuo yy_top_left" @click="shijian2"></div>
            <p class="yy">{{title}}</p>
            <div class="yy_top_right" @click="shijian">
                <p class=" iconfont icon-qiehuan" ></p>
                <h5>{{qiehuan}}</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods:{

    },
    props:["title","qiehuan","shijian","shijian2"]//影院的数据
}
</script>

<style scoped>
    @import "../assets/css/headerSeat.css";
</style>

