<template>
    <div class="bzzx">
        <hhead :sehzhizuo="sehzhizuo"></hhead>
        <div class="cnxh">
            <div>猜你想问</div>
            <p>新用户如何注册</p>
            <p>怎么绑定会员卡</p>
            <p>买票成功后怎么取票</p>
            <p>APP/小程序无法定位</p>
        </div>

        <div class="chenchen"></div>

        <div class="cjwt">
            <div class="cj_top">常见问题</div>
            <div class="mob">
                <div class="mo_one">
                    <div style="color:#998278" class="iconfont icon-user7"></div>
                    <div>新手上路</div>
                    <div class="xssl iconfont icon-xiajiantou"></div>
                </div>
                <div class="mo_two">
                    <div>新用户注册</div>
                    <div>用户登录</div>
                </div>
            </div>
            <div class="mob">
                <div class="mo_one">
                    <div style="color:#998278" class="iconfont icon-vip5"></div>
                    <div>会员权益</div>
                    <div class="xssl iconfont icon-xiajiantou"></div>
                </div>
                <div class="mo_two">
                    <div>会员权益</div>
                    <div></div>
                </div>
            </div>
            <div class="mob">
                <div class="mo_one">
                    <div style="color:#998278" class="iconfont icon-iconfontsvgmoban05
"></div>
                    <div>购票指南</div>
                    <div class="xssl iconfont icon-xiajiantou"></div>
                </div>
                <div class="mo_two">
                    <div>购票流程</div>
                    <div>取票流程</div>
                </div>
            </div>
            <div class="mob">
                <div class="mo_one">
                    <div style="color:#998278" class="iconfont icon-bangzhuzhongxin1
"></div>
                    <div>其他</div>
                    <div class="xssl iconfont icon-xiajiantou"></div>
                </div>
                <div class="mo_two">
                    <div>其他问题</div>
                    <div>商务合作</div>
                </div>
            </div>
        </div>

        <div class="wyzx">
            <button>我要咨询</button>
        </div>



    </div>
</template>
<script>
import hhead from "../musheng/common/shezhi"
export default {
    data() {
        return {
            sehzhizuo:"帮 助 中 心"
        }
    },
    methods: {
        
    },
    components:{
        hhead,
    },
}
</script>

<style scoped>
    @import "../../assets/css/help.css";

</style>

