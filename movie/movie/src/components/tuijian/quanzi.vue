<template>
    <div class="quanzi">
        <lbt :carousel="datacar"></lbt>
        <div class="sgdb">
            <span class="yangqz">购票活动</span><span class="">抽奖活动</span>
            <span>影评</span>
        </div>
        <div class="zhedang">
        <div class="quehuan">
            <ul>
                <sange v-for="(item,index) of datahb" :key="index" :title="item.title" :img="item.img" :person="item.person" :time="item.time" :id="item.id"></sange>
            </ul>
            <ul>
               <sange v-for="(item,index) of datahc" :key="index" :title="item.title" :img="item.img" :person="item.person" :time="item.time" :id="item.id"></sange>
            </ul>
            <ul>
                <!-- <zgs></zgs>
                <zgs></zgs>
                <zgs></zgs>
                <zgs></zgs> -->
                <div class="daodi">
                正在更新中！
                </div>
            </ul>
        </div>
        </div>
    </div>
</template>

<script>
import lbt from './lbt'
import sange from './quanzi_01'
import zgs from './jytj_zgs'
export default {
    data() {
        return {
            datacar:"",//轮播图
            datahb:"",//活动数据
            datahc:[{
                title:"6月大转盘赢大礼",
               person:"666",
                time:"14天13小时后结束",
                img:"13.jpg",
                id:1
            }],
        }
    },
    // props:["carousel"],
    methods: {
        data_car(){//轮播图的axios
            var url="forum/qzcar";
            this.axios.get(url)
            .then(result=>{
                this.datacar=result.data.data;
            });
        },
        data_hb(){//活动数据axios
            var url="forum/activity";
            this.axios.get(url)
            .then(result=>{
                this.datahb=result.data.data;
            })
        },
    },
    created(){
        this.data_car()//轮播图axios
        this.data_hb()//活动数据axios
       
    },
    components:{
        lbt,
        sange,
        zgs
    },
    mounted(){
        var sgdb=document.getElementsByClassName("sgdb")[0];
        var queh=document.getElementsByClassName("quehuan")[0];
        var asp=sgdb.getElementsByTagName("span");

        for(var i=0;i<asp.length;i++){
            asp[i].index=i;
            asp[i].onclick=function(){
                for(var i=0;i<3;i++)asp[i].className="";
                this.className="yangqz";
                queh.style.left=-this.index*100+"%";
            }
        }

    }
}
</script>

<style scoped>
     @import "../../assets/css/quanzi.css";
</style>

