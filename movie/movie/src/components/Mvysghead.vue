<template>
    <div>
        <div class="dizi_top">
            <div class="dizi_top_left">
                <div class=" iconfont icon-dianyingziyuan yysg" ></div>
                <div>一 号 影 城</div>
            </div>
            <router-link :to="{path:'mvcinema',query:{did:1}}">
                <div class="dizi_top_right" @click="qiehuanyy">
                    <div class="icon-qiehuan1 iconfont"></div>
                    <p>切换影院</p>
                </div>
            </router-link>
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
        qiehuanyy(){
        },
    },
}
</script>

<style scoped>
    @import "../assets/css/ysghead.css";
</style>

