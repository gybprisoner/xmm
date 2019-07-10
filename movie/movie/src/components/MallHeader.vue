<template>
<div>
    <div class="malltop"></div>
    <div class="mallheader">
           
            <div class="mall" @click="chengs">
                <span>广州市<img src="../assets/img/0001.png"></span>
            </div>
        <div class="mall_1">  
            <div class="mall_2">
                一号影城广州维家思店<img src="../assets/img/0004.png" class="mall_img">
            </div> 
            
        </div>
        <div class="iconfont hahaa" @click="jygou">
            <img src="../assets/img/0005.png" >
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
            jygou(){
                var session=sessionStorage.getItem("sessionLogin");
                if(session!==null){
                    this.$router.push("/mvshopping");
                }else{
                    this.$toast("请先登录");
                    this.$router.push("/dl");
                }
            },
            chengs(){
                this.$router.push("/city");
            }
        }
    }
    </script>
<style scoped>
    @import "../assets/css/storeHead.css";
</style>
