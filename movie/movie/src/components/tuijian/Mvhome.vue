<template>
    <div class="centerzhuye" @click="home">
        <mt-tab-container v-model="selected">
        
        <mt-tab-container-item id="no1"><!--首页-->
            <theada></theada>
            <index :carousel="carousel"  :data1="data1" :data2="data2" :data3="data3" :fenye="fenye"></index>
            <mt-button size="large" @click="yuedu">加 载 更 多</mt-button>
           <div class="shangczhuye"></div>
        </mt-tab-container-item>
        <mt-tab-container-item id="no2"><!--商城-->
            <mallhead></mallhead>
           <store></store>
           <div class="shangczhuye"></div>
        </mt-tab-container-item>
        <mt-tab-container-item id="no3">
            <ysghead class="ysghheadzhuye"></ysghead><!--头部-->
           <ysg></ysg><!--逸速购-->
           <div class="shangczhuye"></div>
        </mt-tab-container-item>
        <mt-tab-container-item id="no4">
            <quanzi :carousel="carousel"></quanzi><!--圈子-->
            <div class="shangczhuye"></div>
        </mt-tab-container-item>
        <mt-tab-container-item id="no5">
           <mycenter  :headshow1="headshow1" :headshow2="headshow2"></mycenter><!--我的-->
           <div class="shangczhuye"></div>
        </mt-tab-container-item>
    </mt-tab-container>
    
    
    
    
    	<mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="no1" class="iconfont icon-xin4">
            推荐
        </mt-tab-item>
        <mt-tab-item id="no2" class="iconfont icon-shangcheng6">
            商城
        </mt-tab-item>
        <mt-tab-item id="no3">
            <img class="img1zhuye" src="../../assets/index/tj/nowang.png" alt="">
        </mt-tab-item>
        <mt-tab-item id="no4" class="iconfont icon-pengyouquan1193401easyiconnet">
            圈子
        </mt-tab-item>
        <mt-tab-item id="no5" class="iconfont icon-user5">
            我的
        </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
import quanzi from './quanzi'//圈子
import index from './index'//首页
import store from '../Mvstore'//商城
import ysg from '../Mvysg'//逸速购
import theada from '../TitleBar'
import mycenter from '../musheng/My'
import mallhead from '../MallHeader'//商城头部
import ysghead from '../Mvysghead'//ysg页头
export default {
    data() {
        return {
             carousel:"",//轮播图
             data1:"",//正在上映
             data2:"",//即将上映
             data3:"",//猜你喜欢
             data4:"",//电影阅读
             selected:"no1",
             session:-1,
            headshow1:true,//控制我的页面
            headshow2:false,//控制我的页面
            session2:"",//退出保持在进入前的页面
            pno:0,//阅读页码
            yeshu:4,//阅读页量
            fenye:[],//页读数据
        }
    },
    
    methods: {
        data_car(){//轮播图数据
            var url="index/carousel";
            this.axios.get(url)
            .then(result=>{
                this.carousel=result.data.data
            })
        },
        data_i(){
            var url="index/iproduct";
            this.axios.get(url)
            .then(result=>{
                this.data1=result.data.data1;
                this.data2=result.data.data2;
                this.data3=result.data.data3;
                this.data4=result.data.data4;
            })
        },
        home(){
         sessionStorage.setItem("onon",this.selected);//退出保持在进入前的页面
        },
        yuedu(){
            var url="index/sefen";
            this.pno++
            if(this.pno>3){
                 this.$toast({
                    message:"小一已经被掏空了！",
                    duration:1000,
                    iconClass:"iconfont icon-kaixin"
                    });
            }else{

                this.axios.get(url,{params:{
                    pno:this.pno,
                    pageSize:this.yeshu,
                }})
                .then(result=>{
                   var row=this.fenye.concat(result.data.data);
                   this.fenye=row
                });
            };
            
            
        },
       
    },
    created(){
        this.yuedu();//阅读的数据
         this.data_car()//轮播图数据
         this.data_i()//轮播下面的所有数据
         this.session=sessionStorage.getItem("sessionLogin");
        sessionStorage.setItem("fenye",this.fenye)
       
    },
    mounted(){
        
        if(this.session==null){//控制我的页面
            this.headshow1=true;
            this.headshow2=false;
        }else{
            this.headshow1=false;
            this.headshow2=true;
        };
        this.session2=sessionStorage.getItem("onon")//退出保持在进入前的页面
        if(this.session2==""||this.session2==null){
            this.selected="no1"
        }else{
            this.selected=this.session2
        }
        
    },
    components:{
        quanzi,
        index,
        store,
        ysg,
        mycenter,
        theada,
        ysghead,
        mallhead
    },
}
</script>

<style scoped>
     @import "../../assets/css/home.css";

</style>
