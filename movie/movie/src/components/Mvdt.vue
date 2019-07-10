<template>
    <div class="mappp">       
        <dthead :sehzhizuo="sehzhizuo"></dthead>
        <img src="../assets/img/ditu.png">
    </div>
</template>

<script>
import dthead from "./musheng/common/shezhi"
export default {
    data() {
        return {
            sehzhizuo:"一 号 空 中 影 院"
        }
    },
    components:{
        dthead
    },
}
</script>
<style scoped>
@import "../assets/css/dt.css";
</style>
