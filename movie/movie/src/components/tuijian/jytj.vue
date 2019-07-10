<template>
    <div class="jytj">
        <div class="jytj_top" @click="sss">一号推荐</div>
        <zgs v-for="(item,index) of fenye" :key="index" :title="item.title" :img="item.img" :time="item.time" :xx="item.xx" :pl="item.pl" :yid="item.id"></zgs>
        <!-- <div class="daodi">
            您已到底了,刷新看看吧
        </div> -->
    </div>
</template>

<script>
import zgs from './jytj_zgs'
export default {
    data() {
        return {
            
        }
    },
    props:["fenye"],//父级传来的数据
    methods: {
        sss(){
            
        }
    },
    created(){
        
    },
    components:{
        zgs,
    },
}
</script>

<style scoped>
    @import "../../assets/css/jytj.css";
</style>
