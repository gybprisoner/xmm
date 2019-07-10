<template>
    <div class="grzx" style="background-color:#fff;">
        <div class="grzx_top">
            <div class="juedui iconfont icon-back1" @click="myhomet"></div>
            <div class="top01">
                <div class="top01_1">
                    <img :src="require(`../../assets/user/${avatar}`)" alt="">
                </div>
                <p class="top01_2">{{uname}}</p>
                <p class="top01_3">一号粉丝</p>
                <p class="top01_3">
                    关注&nbsp;0&nbsp;&nbsp;|&nbsp;&nbsp;粉丝&nbsp;0
                </p>
            </div>
        </div>
        <div class="wdyp">
            我的影评
        </div>
        <div class="zujiaa">
            <p class="wuno">一路走来，一路花开。</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            uname:"",
            avatar:"youke.jpg"
        }
    },
    methods: {
       myhomet(){
           history.go(-1)
       } 
    },
    created(){
        this.uname=sessionStorage.getItem("useruname");
        this.avatar=sessionStorage.getItem("useravatar");
    }
}
</script>

<style scoped>
    @import "../../assets/css/myhome.css";
</style>


