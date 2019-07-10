<template>
    <div>
        <router-link :to="{path:'mvydxq',query:{yid:yid}}">
            <div class="jytj_zgs">
                <div class="zgs_left">
                    <img :src="require(`../../assets/index/yuedu/${img}`)" alt="">
                </div>
                <div class="zgs_you">
                    <p>{{title}}</p>
                    <p>阅读</p>
                    <div class="xhm">
                        <p>{{time}}</p>
                        <p><span class="iconfont icon-xinx">{{xx}}</span><span class="iconfont icon-unie6bc">{{pl}}</span></p>
                    </div>
                    
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props:["title","img","time","xx","pl","yid"],//父级传来的数据
    created(){
        
    },
}
</script>

<style scoped>
    @import "../../assets/css/jytj_zgs.css";
</style>
