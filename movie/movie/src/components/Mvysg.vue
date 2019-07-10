<template>
    <div>
        <div class="margin_top"></div>
        <div class="dizi_top">
            <div class="dizi_top_left">
                <div class="icon-back iconfont ysghoutuo"  @click="ysghouhou"></div>
                <div>一号影城空中电影城</div>
            </div>
            <div class="dizi_top_right" @click="qiehuanyy">
                <div class="icon-qiehuan1 iconfont"></div>
                <p>切换影院</p>
            </div>
        </div>
        <div class="dizi">
            <div class="a__left">
                <span class="iconfont icon-weizhi1"></span>
                <p>
                    广州市海珠区阅江西路222号广州塔（B功能区）18-21层
                </p>  
            </div>
            <p class="iconfont icon-lunbo-jiantouyou a_right" @click="mying"></p>
        </div>

        <div class="tuijian">
            <div @click="guanying">
                <p >观影套餐</p>
                <p class="iconfont icon-yinliao iconfont_p"></p>
            </div>
            <div @click="quanzhi">
                <p>权益卡</p>
                <p class=" iconfont icon-taocan iconfont_p"></p>
            </div>
        </div>
        <!-- 轮播 -->
        <div class="carousel_bg" ref="ca_bg" >
            <div class="carousel">
                <ul class="carousel_ul" :style="{transform:'translate(122px)',width:`${data_img.length*30}%`}" ref="ulul">
                    <li @click="li1(index)" :class="lia" v-for="(item,index) of this.data_img" :key="index">
                        <img :src="require(`../assets/ysg/${item.img}`)">
                    </li>
                
                </ul>
            </div>
        </div>
        
        <div class="center_time">
            <div class="center_jt">
           <!-- 指针箭头 -->
            </div>
            <div class="center_time_right">
                <h4 >{{title}}</h4>
                <p>片长：{{time}}</p>
            </div>
            <router-link :to="{path:'dyxq',query:{xid:img_id}}" >
                <p class="iconfont icon-lunbo-jiantouyou fudong center_time_left" @click="xqa"></p>
            </router-link>
        </div>
        <!-- 切换日期 -->
        <div class="tiem_but">
            <p @click="ri1" :style="style1">{{xuantime1}}</p>
            <p @click="ri2" :style="style2">{{xuantime2}}</p>
        </div>
        <!-- 场次-->
        <!-- <router-link :to="`mvseat/${img_id}`">给选座跳转传值 -->
        <router-link :to="{path:'mvseat',query:{pid:img_id}}">
            <div v-for="(item,index) of this.c1" :key="index" @click="dangq(item.price,item.time,item.title)" class="divdiv">
                
                <ul class="changci">
                    <li class="changci_li1">
                        <img :src="require(`../assets/ysg/${item.topimg}`)">
                    </li>
                    <li class="changci_li2">
                        <h4 class="item_1">{{item.time}}</h4>
                        <p>{{item.subtime}}散场</p>
                    </li>
                    <li class="changci_li3">
                        <h5>
                            {{item.title}}
                        </h5>
                        <p>{{item.subtitle}}</p>
                    </li>
                    <li class="changci_li4">
                        <img :src="require(`../assets/ysg/${item.ddimg}`)">
                    </li>
                    <li class="changci_li5">
                        <span  class="qian1">￥</span>
                        <span class="qian2">{{item.price}}</span>
                    </li>
                </ul>
            </div>
        <!-- </router-link> -->
        </router-link>
        <div class="ysgdibu"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
          ul:"",
          lia:{
             
          },
          ww:"",//所有li
          bg:"",//背景图片
          data_img:[],//图片数据
          title:"",//标题
          time:"",//时间
          img_id:1,//图片id
          c1:"",//场次1
          c2:true,//切换场次
          style1:{
              background:"#998278",
              color:"#fff"
          },
          style2:{
              background:"#fff",
              color:"#000"
          },
          xuantime1:"6月22日",
          xuantime2:"6月23日",
          xuantime:"",
          yid:0,
          sid:0,
          seatz:0,
          xxid:0,
        }
    },
    methods:{
         li1(e){
           
            //   var bg=this.$refs.ca_bg
                // this.bg=bg
                // console.log(bg)
            this.title=this.data_img[e].title;
            this.time=this.data_img[e].time;
            this.img_id=this.data_img[e].id;
           
        //    console.log(e)
            if(e==0){
             this.ul.style.transform="translate(6.5%)";
           
            }else{
               this.ul.style.transform=`translate(${6.5-e*5.5*1.07}%)`;
            }
           for(var i=0;i<this.ww.length;i++){
               this.ww[i].className=""
           }
           this.ww[e].className="li_li";
          this.datacc()//场次数据
        },
        dataimg(){//图片的axios
            var url="product/schedule";
            this.axios.get(url)
            .then(result=>{
                this.data_img=result.data.data;
                this.title=this.data_img[0].title;
                this.time=this.data_img[0].time;
                this.img_id=this.data_img[0].id;
            });
        },
        datacc(){//场次axios
            var url="product/schedule2";
            var params={cid:this.img_id}
            this.axios.get(url,{params})
            .then(result=>{
                if(this.c2==true){
                    this.c1=result.data.data1;
                }else{
                    this.c1=result.data.data2;
                }
            
            // this.c2=result.data.data2;
            //    console.log(this.c1)
            })
        },
        ri1(){//日期1
            this.style1.background="#998278";
            this.style1.color="#fff";
            this.style2.background="#fff";
            this.style2.color="#000";
            this.c2=true;
            this.datacc();
            this.xuantime=this.xuantime1;//选中日期
        },
        ri2(){//日期2
            this.style2.background="#998278";
            this.style2.color="#fff";
            this.style1.background="#fff";
            this.style1.color="#000";
            this.c2=false;
            this.datacc();
            this.xuantime=this.xuantime2;//选中日期
        },
        dangq(e,e1,e2){
            //  this.$store.commit("priceadd",e)
            sessionStorage.setItem("price",e);
            sessionStorage.setItem("time",e1);
            sessionStorage.setItem("title",e2);
            sessionStorage.setItem("xuantime",this.xuantime);
            
        },
        guanying(){
            this.$router.push("/mvguan");
            sessionStorage.setItem("seatz",this.img_id);
        },
        ysghouhou(){
            history.go(-1)
        },
        qiehuanyy(){
            history.go(-1);
            // sessionStorage.setItem("seatz",this.img_id);
        },
        xqa(){
            sessionStorage.removeItem('vv');
            // console.log(this.img_id)
        },
        mying(){
            this.$router.push("ying");
            sessionStorage.setItem("seatz",this.img_id);
           
        },
        quanzhi(){
            this.$router.push("quanzhi");
            sessionStorage.setItem("seatz",this.img_id);
        }
       
    },
    mounted(){
        var ul=this.$refs.ulul//滑动ul
        this.ul=ul
        this.ww=ul.children
        setTimeout(()=>{
            ul.children[0].className="li_li"
             if(this.yid!==undefined){//影院的跳转
                 this.li1(this.yid-1)
             } 
             if(this.seatz!==null){//上一场
                 this.li1(this.seatz-1)
                 sessionStorage.removeItem('seatz');
             }
             if(this.xxid!==null){
                 this.li1(this.xxid-1);
                 sessionStorage.removeItem('xxid');
             }
              
        },250);
        
    },
    created(){
        this.xuantime=this.xuantime1;//选中日期
        this.yid=this.$route.query.yid
        this.seatz=sessionStorage.getItem("seatz")
        this.xxid=sessionStorage.getItem("xxid")
        
        this.dataimg();//图片数据
        this.datacc()//场次数据
        // this.sid=this.$route.query.sid
        // console.log(this.xxid)
        
    },
   updated(){
       
    },
}
</script>


<style scoped>
  @import "../assets/css/ysg.css";
</style>
