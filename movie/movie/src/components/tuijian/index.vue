<template>
    <div>
       <lbt :carousel="carousel"></lbt><!-- 轮播图 -->
       <cnm :data1="data1" :data2="data2"></cnm><!-- 热映 -->
       <cnxh :data3="data3"></cnxh><!--食物 -->
       <jytj :fenye="fenye"></jytj><!-- 阅读 -->
    </div>
</template>

<script>
 import lbt from './lbt'//轮播图
 import cnm from './cnm'//热映
 import cnxh from './cnxh'//食物
 import jytj from './jytj'//阅读
export default {
    data() {
        return {
            
        }
    },
    props:["carousel","data1","data2","data3","fenye"],
    components:{
        lbt,
        cnm,
        cnxh,
        jytj
    },
}
</script>
<style scoped>

</style>
