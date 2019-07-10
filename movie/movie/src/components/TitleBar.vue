<template>
    <div class="page-headaa" :style="yanshi">
        <div class="page-h1bb" @click="chengshi">
        <span>广州市<img src="../assets/img/0001.png"></span>
        </div>
        <div class="page-h2cc"  @click="erwei">
            <span><img src="../assets/img/0002.png"></span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            yanshi:{
                background:"transparent"
            }
        }
    },
    methods:{
        handleScroll(){
            var gun=document.documentElement.scrollTop
            if(gun>150){
                this.yanshi.background="#998278"
            }else{
                this.yanshi.background="transparent"
            }
        },
        chengshi(){
            this.$router.push("/city");
        },
        erwei(){
            var sess=sessionStorage.getItem("sessionLogin")
            if(sess==null){
                this.$router.push("/dl");
            }else{
                this.$toast({
                    message:"您已属于登录状态！",
                    duration:1000,
                    iconClass:"iconfont icon-biaoqing4"
                    });
            }
            // console.log(sess)
        }
    },
    mounted(){
       window.addEventListener('scroll', this.handleScroll)
       var gun=document.documentElement.scrollTop;
       if(gun>150){
            this.yanshi.background="#998278"
        }else{
            this.yanshi.background="transparent"
        }
    }
}
</script>

<style scoped>
     @import "../assets/css/titlebar.css";
    
</style>