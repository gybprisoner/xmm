<template>
<div class="lyingc">
    <mt-swipe :auto="4000">
    <mt-swipe-item v-for="(item,index) of carousel" :key="index"><img class="dxlb" :src="require(`../../assets/index/carousel/${item.img}`)" alt=""></mt-swipe-item>
    </mt-swipe>
</div>
</template>

<script>
export default {
    data() {
        return {
            ulone:{
                paodong:true,
                xiaoguo:false,
            },
        }
    },
    props:["carousel"],//数据
    methods: {

    },
    }
    </script>

    <style scoped>
    @import "../../assets/css/lbt.css";
    /* 影藏 */
</style>