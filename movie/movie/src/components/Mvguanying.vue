<template>
    <div class="gani">
        <shenzhitop :sehzhizuo="sehzhizuo"></shenzhitop>
        <mvstore></mvstore>
    </div>
</template>

<script>
import shenzhitop from "./musheng/common/shezhi"
import mvstore from "./Mvstore"
export default {
    data() {
        return {
            sehzhizuo:"观 影 套 餐",
        }
    },
    components:{
        shenzhitop,
        mvstore
    }
}
</script>

<style scoped>
.gani{
    animation:fadeInRightBig 0.4s;
}
</style>
