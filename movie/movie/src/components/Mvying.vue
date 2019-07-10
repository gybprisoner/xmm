<template>
    <div class="overall">
        <yhead :sehzhizuo="sehzhizuo"></yhead>
        <div class="over-s" >
            <div class="over-viwe br1">
                <div class="over-mash">
                    <div class="over-ma"><img src="../assets/img/002.jpg"></div>
                    <div class="over-ma"><img src="../assets/img/003.jpg"></div>
                    <div class="over-ma"><img src="../assets/img/004.jpg"></div>
                    <div class="over-ma"><img src="../assets/img/005.jpg"></div>
                    <div class="over-ma"><img src="../assets/img/006.jpg"></div>
                    <div class="over-ma"><img src="../assets/img/007.jpg"></div>
                    <div class="over-ma"><img src="../assets/img/008.jpg"></div>
                </div>
            </div>
        </div>
        <h2 class="over-h mv-tit fs16yc fs1yc">一号空中电影城</h2>
        <div class="empty"></div>
        <div class="over-d br1" @click="ditu">
            <p class="fs12 pd1 fs1yc">
                <img src="../assets/img/dw.png">
                <span>广州市海珠区阅江西路222号广州塔（B功能区）18-21层</span>
            </p>
        </div>
         <div class="empty"></div>
       <h2 class="over-h mv-tit fs16yc fs1yc">影城简介</h2>
        <div class="fs12 mv-tit">一号空中电影城，位于广州塔B功能区17楼至22楼，由广州一号影视传媒股份有限公司投资打造的顶级豪华影院。影城由国际顶级影院设计专家设计，环境别具匠心，无论是大堂、影厅过道、灯光设计等，都充满几何美学，带给观众非凡的时尚体验。影城由一个专业的4D放映厅及两个3D放映厅，共273个座位组成，并配有富含影视历史文化气息的电影博物馆、衍生品展览区，和兼具私密性的影视私人会所。所有影厅均采用英国进口银幕，其数码放映及视听设备，代表了当今国际电影工业最先进的高度。营业时间：10:00-22:00
        </div>
        <div class="empty"></div>
        <h2 class="fs16yc mv-tit over-h fs1yc">特色信息</h2>
        <p class="fs12 mv-tit emp-p"><span class="emp-s">优惠信息</span>  温馨提示：在节假日以及每天21：30后场次观影的观众提前至少40分钟取票登塔，避免因排队过安检时间过长而造成电影延误或不能登塔。</p>
        <p class="fs12 mv-tit emp-p"><span class="emp-s">可停车</span>  广州塔停车场，节假日停车位紧张；收费标准：前3个小时5元/小时，超出3小时部分10/小时。</p>
          <p class="fs12 mv-tit emp-p bor"><span class="emp-s">公交路线</span>  地铁：地铁3号线、APM线广州塔站，B出口 公交：海珠有轨电车；204/121/121A、旅游公交2线、262到珠江帝景苑总站; 468/262到达广州塔西站;旅游观光1线到达广州塔东站</p>
          <div class="footer"></div>
        <div class="ticket">
            <button class="butyc fs16yc fs1yc" @click="liji">立即购票</button>
        </div>

    </div>
</template>

<script>
import yhead from "./musheng/common/shezhi"
export default {
    data() {
        return {
            sehzhizuo:"一 号 空 中 电 影 城"
        }

    },
    methods: {
        liji(){
            history.go(-1)
        },
        ditu(){
            this.$router.push("/dt")
        }
    },
    components:{
        yhead
    },
}
</script>
<style scoped>
   @import "../assets/css/ying.css";
</style>
