<template>
    <div class="com">
        <div class="comhr">
             <div class="com-nav">
                 <span @click="swxqzuo"><img class="pad1" src="../assets/img/fh.png"></span>
             </div>
             <div class="com-nav" style="right:0px">
                 <span  @click="xqgowu"><img class="pad1" src="../assets/img/gwc.png"></span>
             </div>
        </div>
        <div class="hear"><img src="../assets/img/dk.jpg" class="hear-img"></div>
        <div class="mv-tit col1">
             <div class="mar1"><h2 class="fs16">双人特惠可乐套餐</h2></div>
             <div class="content">
                 <span class="cont-san">¥20.00</span>
                 <div class="cont-bt site-right5">
                     <span class="pos1"><img src="../assets/img/jianhao.png"></span>
                     <span class="tx fs14">1</span>
                 <span class="pos1 site-right5"><img src="../assets/img/jiahao.png"></span>
                 </div>
             </div>
             <div class="fs14">市场价:
                 <span class="fs-sty1">¥23.00</span>
             </div>
        </div>
     <!--  -->
        <div class="empty sit"></div>
        <div class="mv-tit content">
             <h2 class="fs12 col1">选择(影院):一号影城广州维家思店</h2>
             <img class="site-right5 pos1" src="../assets/img/dyh.png">
        </div>
        <div class="empty"></div>
    
     <!--  -->
        <div class="mv-tit ">
            <h2 class="fs16 mar1 col1">购买须知</h2>
            <p>1.本商城所有售卖商品为一号电影自营线上渠道全国统一定价；</p>
            <p>2.因光线或显示等因素影响，不排除图片与实物存在微小差异,请以真实实物为准，如有异议请谨慎购买；</p>
            <p>3.商场所售电子或虚拟商品（如优惠券、充值等），一经售出，概不退换；</p>
            <p>4.为保证食品安全，顾客购买食品类商品需在7天内领取，过期则产品无法领取，货款不予退还</p>
            <p>5.用户购买衍生品，可自主选择自提或邮寄，选择自提可在成功支付货款后7天内凭提货短信至预选影城提货，影城为顾客免费保留7天，过期未领取将按5元/天收取保管费；</p>
            <p>6.选择邮寄方式按系统默认快递费收取快递费用（包邮产品除外）；</p>
            <p>7.一号影城保留商品销售的最终解释权，如有疑问，可致电一号客服000000-00</p>
            <div style="height:44px;"></div>
        </div>
     <!--底部按钮-->
        <div class="ticketsw">
            <button class="butsw fs1 fs16">立即购买</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods:{
        swxqzuo(){
            history.go(-1)
        },
        xqgowu(){
            var session=sessionStorage.getItem("sessionLogin");
            if(session!==null){
                this.$router.push("/mvshopping");
            }else{
                this.$toast({
                message:"亲，请先登录",
                duration:1000,
                iconClass:"iconfont icon-biaoqing4"
                });
                this.$router.push("/dl");
            }
        }
    }
}
</script>
<style scoped>
    @import "../assets/css/shiwuxq.css";
</style>
