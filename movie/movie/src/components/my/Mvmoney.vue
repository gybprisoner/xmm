<template>
    <div class="wdqb">
        <mhead :sehzhizuo="sehzhizuo"></mhead>
        <div class="wd_tx">
            <div class="tx_one">
            <span class="iconfont icon-vip1"></span>
            <span>会员卡</span>
            </div>
            <div class="two iconfont icon-lunbo-jiantouyou"></div>
        </div>

        <div class="wd_tx">
            <div class="tx_one">
            <span class="iconfont icon-dazheqia"></span>
            <span>权益卡</span>
            </div>
            <div class="two iconfont icon-lunbo-jiantouyou"></div>
        </div>
        
        <div class="wd_tx">
            <div class="tx_one">
            <span class="iconfont icon-youhuiquan2"></span>
            <span>优惠券</span>
            </div>
            <div class="two iconfont icon-lunbo-jiantouyou"></div>
        </div>

        <div class="wd_tx">
            <div class="tx_one">
            <span class="iconfont icon-qianbao"></span>
            <span>大礼包</span>
            </div>
            <div class="two iconfont icon-lunbo-jiantouyou"></div>
        </div>

    </div>
</template>
<script>
import mhead from "../musheng/common/shezhi"
export default {
    data() {
        return {
           sehzhizuo:"我 的 钱 包" 
        }
    },
    methods: {
        
    },
    components:{
        mhead
    }
}
</script>

<style scoped>
     @import "../../assets/css/money.css";
</style>

