<template>
    <div class="zjyh">
        <chead :sehzhizuo="sehzhizuo"></chead>
        <div class="zjyhone">企业简介</div>
        <div class="zjyhtwo">
            <div>企业简介</div>
            <div class="dxaa iconfont icon-back5"></div>
        </div>
        <div class="zjyhone">企业文化</div>

        <div class="zjyhtwo">
            <div>一号动态</div>
            <div class="dxaa iconfont icon-back5"></div>
        </div>
        <div class="zjyhtwo">
            <div>流光溢彩</div>
            <div class="dxaa iconfont icon-back5"></div>
        </div>
        <div class="zjyhtwo">
            <div>一号公益</div>
            <div class="dxaa iconfont icon-back5"></div>
        </div>
        <div class="zjyhtwo">
            <div>一号视野</div>
            <div class="dxaa iconfont icon-back5"></div>
        </div>
        <div class="zjyhone">培训发展</div>

        <div class="zjyhtwo">
            <div>培训通知</div>
            <div class="dxaa iconfont icon-back5"></div>
        </div>
        <div class="zjyhtwo">
            <div>培训分享</div>
            <div class="dxaa iconfont icon-back5"></div>
        </div>
        <div class="zjyhtwo">
            <div>培训花絮</div>
            <div class="dxaa iconfont icon-back5"></div>
        </div>
        <div class="zjyhone">三顾茅庐</div>
        <div class="zjyhtwo">
            <div>社会招聘</div>
            <div class="dxaa iconfont icon-back5"></div>
        </div>
    </div>
</template>

<script>
import chead from "../musheng/common/shezhi"
export default {
    data() {
        return {
            sehzhizuo:"走 进 一 号"
        }
    },   
    methods: {
        
    },
    components:{
        chead
    }
}
</script>

<style scoped>
    @import "../../assets/css/culture.css";
</style>

