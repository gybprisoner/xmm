<template>
    <div class="myzij">
        <fhead :sehzhizuo="sehzhizuo"></fhead>
        <p class="zjpaa">亲，去逛逛吧！</p>
    </div>
</template>

<script>
import fhead from "../musheng/common/shezhi"
export default {
    data() {
        return {
            sehzhizuo:"我 的 足 迹"
        }
    },
    components:{
        fhead
    }
}
</script>

<style scoped>
   @import "../../assets/css/foot.css";
</style>
