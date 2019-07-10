<template>
    <div>
        <div class="shetopa"></div>
        <div class="setonb">
        <i class="iconfont icon-back1" @click="zhezhitui"></i>
        <p>{{sehzhizuo}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    props:["sehzhizuo"],
    methods:{
        zhezhitui(){
            history.go(-1);
        }
    }
}
</script>

<style scoped>
@import "../../../assets/css/shezhi.css";
</style>


