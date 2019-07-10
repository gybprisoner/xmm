<template>
    <div class="dyxq" style="background-color:rgba(236, 233, 233, 0.49)">
        <div class="ani1">
            <div @click="hhm" class="jdfh iconfont icon-qitalunbotupian_zuo"></div>
            <div class="xqbj">
                <img :src="require(`../../assets/index/dyxq1/${datashuju.lg}`)" alt=""/>
            </div>
            <div class="xiangq">
                <div class="jueduixq">
                    <img :src="require(`../../assets/index/dyxq1/${datashuju.md}`)" alt="">
                </div>
                <div class="xq_one">
                    <p class="lgd"><span>{{datashuju.title}}</span> <span>{{datashuju.grade}}</span></p>
                    <p class="lgd_x">{{datashuju.intro}}</p>
                    <p class="lgd_x">{{datashuju.time}}</p>
                    <p class="lgd_x">{{datashuju.up_time}}</p>
                </div>
                <div class="xq_two">
                    <button class="btn iconfont icon-unie69d" @click="jiayi"> 喜欢({{datashuju.xihuan}})</button>
                    <button class="btn iconfont icon-unie69c" @click="jianyi"> 不喜欢({{datashuju.noxihuan}})</button>
                </div>
                <div :style="zhk" class="xq_sr">
                    {{datashuju.details_intro}}
                </div>
                <div @click="zhankai" class="xq_4 iconfont icon-unie661">
                </div>
            </div>
            <div class="yanyuan">
                <ul class="taile">
                    <li class="touxiang">
                        <img :src="require(`../../assets/index/dyxq1/dyxx/${datashuju.yyimg}`)" alt="">
                    </li>
                    <p>{{datashuju.yyname}}</p>
                    <p>{{datashuju.yypost}}</p>
                </ul>
                <ul class="taile">
                    <li class="touxiang">
                        <img :src="require(`../../assets/index/dyxq1/dyxx/${datashuju.yyimga}`)" alt="">
                    </li>
                    <p>{{datashuju.yynamea}}</p>
                    <p>{{datashuju.yyposta}}</p>
                </ul>
                <ul class="taile">
                    <li class="touxiang">
                        <img :src="require(`../../assets/index/dyxq1/dyxx/${datashuju.yyimgb}`)" alt="">
                    </li>
                    <p>{{datashuju.yynameb}}</p>
                    <p>{{datashuju.yypostb}}</p>
                </ul>
            </div>
            <div class="baise">
            <div class="yuedu">说 说</div>
                <ssc :ssimg="datashuju.ssimg" :ssname="datashuju.ssname" :sspl="datashuju.sspl"></ssc>
            </div>


    


            <div class="goupiao">
                <button>发表评论</button>
                <router-link :to="{path:'mvcinema',query:{did:datashuju.id}}" class="rou">
                <button @click="xuanzuogou">选座购票</button>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import ssc from './shuoshuo'
export default {
    data() {
        return {
            zhk:"",
            datashuju:{
                lg:"1lg.jpg",
                md:"1md.jpg",
                yyimg:"1.jpg",
                ssimg:"1.jpg",
                yyimga:"2.jpg",
                yyimgb:"3.jpg",
            },
            knl:1,
            data4:"",
            wangzha:true,
        }
    },
    // props:["pid"],
    methods: {
        hhm(){
            history.go(-1);
            if(this.knl<18){
                sessionStorage.setItem("xxid",this.knl);
            }

           
        },
        zhankai(){//数据
            // console.log(1)
        },
        shuju(){
            var url="index/details";
            this.axios.get(url,{params:{
                id:this.knl
            }}).then(result=>{
                // console.log(result)
               this.datashuju=result.data.data[0]
            })
            // console.log(this.datashuju)
        },
        xuanzuogou(){
            // sessionStorage.setItem("xianqindid",this.datashuju.did);
            // this.$router.push("/mvcinema");
        },
        jiayi(){
            if(this.wangzha){
            this.datashuju.xihuan=parseInt(this.datashuju.xihuan)+1
            this.wangzha=false;
            }else{
            this.$toast({
            message:"一人一票，谢谢支持哦",
            duration:800
            });
            }
        },

        jianyi(){
            if(this.wangzha){
            this.datashuju.noxihuan=parseInt(this.datashuju.noxihuan)+1
            this.wangzha=false;
            }else{
            this.$toast({
            message:"一人一票，谢谢支持哦",
            duration:800
            });
            }
        },

    },
    components:{
        ssc,
    },
    created(){
        if(sessionStorage.getItem("vv")==null){
            this.knl=this.$route.query.xid
        }else{
           this.knl=sessionStorage.getItem("vv")
        };
    },
    mounted(){
        this.shuju()//数据 
    },
}
</script>

<style scoped> 
    @import "../../assets/css/dyxx.css";
</style>
