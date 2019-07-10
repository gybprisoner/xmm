<template>
    <div>
        <div class="yhxx">
            <div class="yhxx_top">
                <div class="yhxx_tx">
                    <img :src="require(`../../assets/index/dyxq1/ssxx/${ssimg}`)">
                </div>
                <div class="tx_zhong">
                    <p>{{ssname}}</p>
                    <p><img class="aimge" src="../../assets/index/xx.png" alt=""><img class="aimge" src="../../assets/index/xx.png" alt=""><img class="aimge" src="../../assets/index/xx.png" alt=""></p>
                </div>
                <div class="tx_right iconfont icon-unief">

                </div>
            </div>



            <div class="ytext">
                {{sspl}}
            </div>
            <div class="lyl">
                <div>4天前</div>
                <div class="shuangx">
                    <span class="iconfont icon-xinx xin1ss"> 6</span>
                    <span class="iconfont icon-uniEBC1"> 1</span>
                </div>
            </div>
        </div>
        <div class="chengcheng"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props:[
        "ssimg",
        "ssname",
        "sspl"
    ],
    methods:{

    },
}
</script>

<style scoped>
    @import "../../assets/css/shuoshuo.css";
</style>

