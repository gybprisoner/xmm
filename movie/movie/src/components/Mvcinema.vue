<template>
    <div class="ani2">
        <div class="top_top" ></div>
        <mvheader :title="headtitle" :qiehuan="headqiehuan" :shijian="shijian" :shijian2="shijian2"></mvheader>
        <div class="yy_top_img">
            <img :src="require(`../assets/xuanzeyy/${data2[0].img}`)" >
        </div>

        <div class="yy_dizhi" v-for="(item,index) of this.data" :key="index"  v-show="xianshi">
            <div class="yy_dizhi_left">
                <h4>{{item.title}}</h4>
                <p>{{item.subtitle}}</p>
            </div>
            <div class="yy_goup" @click="goupiao">
                <router-link :to="{path:'mvysg',query:{yid:xianqindid}}">
                    <div>购票</div>
                </router-link>
                <p>{{item.distance}}</p>
            </div>
        </div>
        <div class="yy_bottom">
            
            <p class="iconfont icon-lunbo-jiantouzuo"></p>
            <h6>我的位置: 广东省广州市越秀区</h6>
            
        </div>
    </div>
</template>

<script>
import mvheader from './Mvheader'
export default {
    data() {
        return {
           data:"",//数据
           headtitle:"影 院",//页头
           headqiehuan:"广州" ,//页头
           data2:[{img:"1.jpg"}],//图片数据
           xianshi:true,
           xianqindid:1,
        }
    },
    methods: {
        datasize(){//axios数据
            var url="index/cinema";
            this.axios.get(url).then(result=>{
               this.data=result.data.data;
            });
        },
        datasize2(){//图片的axios
            var url="index/xuanzeyy";
            this.axios.get(url,{params:{id:this.xianqindid}})
            .then(result=>{
               this.data2=result.data.data;
            })
        },
        shijian(){
            this.$router.push("/city")
        },
        shijian2(){
            history.go(-1)
             sessionStorage.setItem("vv",this.xianqindid)
        },
        goupiao(){//购票按钮
            // sessionStorage.removeItem('seatz');
        },
    },
    created(){
        this.xianqindid=this.$route.query.did
        this.datasize2();//图片数据
        this.datasize();//数据
        if(this.xianqindid>17){
            this.xianshi=false;
            this.$messagebox({
                title:"亲，急啥呢！人家还没上映呢...",
                message:"是否返回首页",
                showConfimButton:true,//显示确定按钮
                showCancelButton:true,//显示取消按钮
            }).then(result=>{
                if(result=="confirm"){
                    this.$router.push("/mvhome")
                }
            })
        }else{
             this.xianshi=true;
        }
    },
    components:{
        mvheader,
    },
}
</script>

<style scoped>
    @import "../assets/css/cinema.css";
</style>

