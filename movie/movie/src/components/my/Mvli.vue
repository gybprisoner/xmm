<template>
    <div class="ljzx">
        <lhead :sehzhizuo="sehzhizuo"></lhead>
        <div class="stjaa">
            <div class="stjone">
                <div class="iconfont icon-youhuiquan3"></div>
                <div>
                    6月升厅劵
                </div>
            </div>
            <div class="stjtwo">
                <div class="yuan"></div>
                <div>立即领取</div>
            </div>
        </div>
    </div>
</template>
<script>
import lhead from "../musheng/common/shezhi"
export default {
    data() {
        return {
            sehzhizuo:"领 券 中 心"
        }
    },
    methods:{

    },
    components:{
        lhead,
    }
}
</script>
<style scoped>
    @import "../../assets/css/li.css";
</style>

