<template>
<div class="play">
    <qhead :sehzhizuo="sehzhizuo"></qhead>
    <div class="pla">
    <img src="../assets/img/qgl.png">
    </div>
    <span class="spa fs16">小主,我被抢光了!
        <!-- <a href="#" ></a> -->
        <span class="fs16 sa" @click="guanguan">去其他逛逛&gt;</span>
    </span>
</div>
</template>

<script>
import qhead from "./musheng/common/shezhi"
export default {
    data() {
        return {
            sehzhizuo:"权 益 卡"
        }
    },
    components:{
        qhead
    },
    methods: {
      guanguan(){
          history.go(-1);
      }  
    },
}
</script>
<style scoped>
 @import "../assets/css/quanzhi.css";
</style>
