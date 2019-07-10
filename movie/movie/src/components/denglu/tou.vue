<template>
        <div class="zhucaa">
        <div @click="toptui">
            <a href="#" class="fanh iconfont icon-back8" ></a>
        </div>
        <span>{{neibu}}</span>
        <!-- <a href="#" class="qieh iconfont icon-unie6a3"></a> -->
        </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props:["neibu"],
    methods:{
        toptui(){
            history.go(-1)
        },
    }
}
</script>

<style scoped>
    @import "../../assets/css/tou.css"
</style>
