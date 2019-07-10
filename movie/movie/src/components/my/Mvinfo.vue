<template>
    <div class="xxzx">
        <ihead :sehzhizuo="sehzhizuo"></ihead>
        <div class="xxzx_top">
            <div :class="ss" @click="bh">私信</div>
            <div :class="sst" @click="bht">通告</div>
        </div>
        <div class="chenchen"></div>
        <div class="yidong">
            <ul class="ul1" :style="lft">
                <li>
                    <div class="djj">
                        <div>
                            <p>小主,恭喜你获得一张六月大转盘抽奖送卖品5元代金劵！</p>
                            <p>2019-06-15&nbsp;&nbsp;17:15:03</p>
                        </div>
                        <div class="jiantou iconfont icon-back5"></div>
                    </div>
                </li>
                <li class="djj">
                    <div>
                        <p>暂无您的通知</p>
                    </div>
                </li>
            </ul>
        </div>


    </div>
</template>

<script>
import ihead from "../musheng/common/shezhi"
export default {
    data() {
        return {
            ss:{
                shishui:true
            },
            sst:{
                shishui:false
            },
            lft:"left:0;",
            sehzhizuo:"消 息 中 心"
        }
    },
    methods:{
        bh(e){
            var wo=e.target;
            this.sst.shishui=false;
            this.ss.shishui=true;
            this.lft="left:0"
        },
        bht(e){
            var wo=e.target;
            this.ss.shishui=false;
            this.sst.shishui=true;
            this.lft="left:-100%"
        }
    },
    components:{
        ihead
    }
}
</script>

<style scoped>
    @import "../../assets/css/info.css";
</style>

