<template>
    <div class="ani3">
        <div v-show="show2">
            <div class="zuo_top"></div>
            <mvheader :title="ysgshuju.title" :qiehuan="headqiehuan" :shijian="seatzuo" :shijian2="seatzuo"></mvheader><!--页头-->


            <div class="top_title"><!--头部标题-->
                <!-- <router-link :to="{path:'mvysg',query:{sid:pid}}"> -->
                    <div class="title_right">
                            <div class="iconfont icon-lunbo-jiantouzuo" @click="seatzuo"></div>
                        <div>
                            <p>14:35</p>
                            <p>上一场</p>
                        </div>
                    </div>
                <!-- </router-link> -->
                <div class="title_center">
                    <h5>{{ysgxuan}} {{ysgtime}}</h5>
                    <p>{{ysgtitle}}</p>
                </div>
                <div class="title_left">
                    <div>
                        <p>18:10</p>
                        <p>下一场</p>
                    </div>
                     <!-- <router-link :to="{path:'mvysg',query:{sid:pid}}"> -->
                        <div class="iconfont icon-lunbo-jiantouyou" @click="seatzuo"></div>
                     <!-- </router-link> -->
                </div>
            </div>

            <div class="seat_title"><!--座位头部-->
                <div>
                    <div class="iconfont icon-zuowei2"></div>
                    <p>可选</p>
                </div>
                <div class="seatcen">
                    <div class="iconfont icon-zuowei2"></div>
                    <p>已售</p>
                </div>
                <div>
                    <div class="iconfont icon-zuowei2 seatcen2"></div>
                    <p>已选</p>
                </div>
            </div>
            <div class="pm_img"><!--屏幕-->
                <p>金逸影城金逸空中电影城 3号激光影厅</p>
            </div>

            <div class="seatazong" ref="seatzongzong" @click="jianting"><!--座位-->
                <div class="seat1" ><!--第1排-->
                    <div class="iconfont icon-zuowei2" v-for="(item,index) of 12" :key="index" @click="seatd1(index)" ></div>
                </div>
                <div class="seat2" ><!--第2排-->
                    <div class="iconfont icon-zuowei2" v-for="(item,index) of 12" :key="index" @click="seatd2(index)"></div>
                </div>
                <div class="seat3" ><!--第3排-->
                    <div class="iconfont icon-zuowei2" v-for="(item,index) of 12" :key="index" @click="seatd3(index)"></div>
                </div>
                <div class="seat4" ><!--第4排-->
                    <div class="iconfont icon-zuowei2" v-for="(item,index) of 10" :key="index" @click="seatd4(index)"></div>
                </div>
                <div class="seat5" ><!--第5排-->
                    <div class="iconfont icon-zuowei2" v-for="(item,index) of 10" :key="index" @click="seatd5(index)"></div>
                </div>
                <div class="seat6" ><!--第6排-->
                    <div class="iconfont icon-zuowei2" v-for="(item,index) of 8" :key="index" @click="seatd6(index)"></div>
                </div>
                <div class="seat7"><!--第7排-->
                    <div class="iconfont icon-zuowei2" v-for="(item,index) of 8" :key="index" @click="seatd7(index)"></div>
                </div>

                <div class="zuoright">
                    <p>A</p>
                    <p>B</p>
                    <p>C</p>
                    <p>D</p>
                    <p>E</p>
                    <p>F</p>
                    <p>G</p>
                </div>
            </div>

            <div class="seat_bot"><!--底部-->
                <div class="xuanseat" @click="maopao"><!--座位号-->
                    <p>{{daixuan}} (一次最多选择6个座位)</p>
                    <div class="seathao" ref="dibuh">
                    
                    </div>
                </div>
                
                <div class="seat_btn">
                    <button :disabled="dis"  @click="spping">加入购物车</button>
                    <button :disabled="dis" @click="goumai">立即购买</button>
                </div>
            </div>
        </div>
        <mverweima v-show="show" @click.native="saoma"></mverweima>
    </div>
</template>

<script>

import mvheader from './Mvheader'
import mverweima from './Mverweima'
export default {
    data() {
        return {
            headtitle:"X战警：黑凤凰（数字3D",
            headqiehuan:"场次",
            dd1:"",//第一排
            dd2:"",//第二排
            dd3:"",//第三排
            dd4:"",//第四排
            dd5:"",//第五排
            dd6:"",//第六排
            dd7:"",//第七排
            sum:0,//选中的数量
            shuzu:"",//座位最外层的div
            dibuhao:"",//ABCDEFG
            dibuwai:"",//座位号的父元素
            erz:"",//座位号
            daixuan:"待选座位",
            dis:true,//控制按钮状态  
            ysgprice:0,//逸速购价格
            ysgshuju:"",//逸速购数据(数据)
            ysgtime:"",//逸速购时间
            ysgtitle:"",//逸速购4d
            ysgxuan:"",//逸速购当前选中的日期 
            show:false,
            show2:true,
            session:-1,
            pid:0, 
        };
    },
    //props:["pid"],//接收从逸速购传来的id去取购物车信息
    methods:{
        seatd1(e){//第一排
            this.dibuhao="A"//对应的排
            this.quanbuzong(e,this.dibuhao,this.dd1);
        },
        seatd2(e){//第二排
            this.dibuhao="B"
            this.quanbuzong(e,this.dibuhao,this.dd2);
        },
        seatd3(e){//第三排
         this.dibuhao="C"
            this.quanbuzong(e,this.dibuhao,this.dd3);
        },
        seatd4(e){//第四排
            this.dibuhao="D"
            this.quanbuzong(e,this.dibuhao,this.dd4)
        },
        seatd5(e){//第五排
            this.dibuhao="E"
             this.quanbuzong(e,this.dibuhao,this.dd5)
        },
        seatd6(e){//第六排
            this.dibuhao="F"
             this.quanbuzong(e,this.dibuhao,this.dd6)
        },
        seatd7(e){//第七排
            this.dibuhao="G"
            this.quanbuzong(e,this.dibuhao,this.dd7)
        },
        dibuzong1(dibuhao1,e1){//删除指定的座位
            var zui=[]
            for(var i=0;i<this.erz.length;i++){
                var nei=this.erz[i].innerHTML
                // console.log(nei)
                if(e1>=9){
                    zui[zui.length]=nei.substr(0,4)
                }else{

                    zui[zui.length]=nei.substr(0,3)
                };
            };
            for(var i=0;i<zui.length;i++){
                if( zui[i]==dibuhao1+"排"+(e1+1)){
                this.erz[i].remove();
                };
            };       
        },
        dibuzong2(dibuhao2,e2){//添加座位
            var frag=document.createDocumentFragment();
            var span=document.createElement("span");
            var p=document.createElement("p");
            span.innerHTML="×";
            span.style.marginLeft="4%";
            span.style.fontSize="15px";
            p.style.border="1px solid #dfdcdc";
            p.style.width="80px";
            p.style.margin="0";
            p.style.textAlign="center";
            p.style.marginRight="5px";
            p.style.marginTop="1%";
            p.innerHTML=`${dibuhao2}排${e2+1}座`;
            p.appendChild(span);
            frag.appendChild(p);
            this.dibuwai.appendChild(frag);
        },
        maopao(e){//冒泡(点击删除对应元素)
            var span=e.target;//当前元素
            if(span.nodeName=="SPAN"){//为span才触发
                span.parentNode.remove();//删除元素
                var spanin=span.parentNode.textContent;//全部的内容
                var spanin1=spanin.substr(0,1)//排号
                var zimu="";//下标
                if(spanin1=="A"){
                    zimu=0;
                }else if(spanin1=="B"){
                    zimu=1
                }else if(spanin1=="C"){
                    zimu=2
                }else if(spanin1=="D"){
                    zimu=3
                }else if(spanin1=="E"){
                    zimu=4
                }else if(spanin1=="F"){
                    zimu=5
                }else if(spanin1=="G"){
                    zimu=6
                };
                
                if(spanin.length==5){//判断切割的内容
                    var spanin2=spanin.substr(2,1);//小于10的号
                }else{
                    var spanin3=spanin.substr(2,2);//大于10的号
                };
                var fuq=this.shuzu[zimu].children//每一排的元素
                for(var i=0;i<fuq.length;i++){
                    if(i+1==spanin2||i+1==spanin3){
                        fuq[i].style.color="rgb(220, 221, 222)";//修改元素
                    };
                };
                this.sum--//删一次就可以多点一次
                this.zhuantai();//更改待选字母(按钮的控制)
            };
           
        },
        jianting(){//冒泡更改按钮状态
            this.zhuantai();//更改待选字母(按钮的控制)
           
        },
        zhuantai(){//更改待选字母(按钮的控制)
            if(this.dibuwai.innerHTML==""){
                this.daixuan="待选座位"
                this.dis=true;
             
            }else{
                this.daixuan="已选座位"
                this.dis=false;
                
            };
        },

        quanbuzong(e,hao,dd){//选择座位的总函数（重点）
        
        
            var seatcolor=window.getComputedStyle(dd[e],null).color;//获取样式值
            if(seatcolor!=="rgb(255, 87, 21)"){//在不是已售的情况下
                if(seatcolor=="rgb(220, 221, 222)"){//是未被选中
                    if(this.sum<=5){//每选一个就+1
                        this.sum++
                        
                    };
                    if(this.sum<=6){//只能选6个
                        var nn=0//按颜色去判断选了几个
                        for(var i=0;i<this.shuzu.length;i++){
                            for(var ss of this.shuzu[i].children){
                              var rr= window.getComputedStyle(ss,null).color;
                              if(rr=="rgb(67, 160, 71)"){
                                   nn++
                                  
                                }
                            } 
                        }
                        dd[e].style.color="rgb(67,160,71)"//选中
                         this.dibuzong2(hao,e)//添加元素
                        if(this.sum==6&&nn!==4){//再次加+第二次不会执行选中
                            this.sum++
                        }  
                    };
                }else{
                    this.sum--
                    dd[e].style.color="rgb(220, 221, 222)"//取消
                    this.dibuzong1(hao,e)//清除元素
                };
            }else{
                return;
            };
        },
        ysg(){//逸速购的数据
            var url="product/selcar";
            this.axios.get(url,{params:{id:this.pid}})
            .then(result=>{ 
                this.ysgshuju=result.data.data[0]   
            })
        },
        spping(){//购物车按钮
            
            if(this.session==null){
                this.$messagebox({
                    title:"请先登录",
                    message:"是否跳转到登录界面？",
                    showConfimButton:true,//显示确定按钮
                    showCancelButton:true,//显示取消按钮
                })
                .then(result=>{
                    if(result=="confirm"){
                        this.$router.push("/dl")
                    }
                });
            }else{
                var zongprice=0;//选了几个
                var zuovalue=""
                for(var er of this.erz){
                    zuovalue+=er.textContent.length==5?er.textContent.substr(0,4)+",":er.textContent.substr(0,5)+","
                    zongprice++
                }
                this.ysgprice=this.ysgprice*zongprice;//总数*价格
                zuovalue=zuovalue.substr(0,zuovalue.length-1)//当前选中的座位

                var url="product//incart";//插入购物车
                this.axios(url,{params:{
                    title:this.ysgshuju.title,
                    data:this.ysgxuan,
                    seat:zuovalue,
                    time:this.ysgtime,
                    img:this.ysgshuju.img,
                    price:this.ysgprice,
                    count:1,
                    ddd:this.ysgtitle
                }}).then(result=>{
                    this.$toast({
                    message:"添加成功",
                    duration:1000,
                    // iconClass:"iconfont icon-kaixin"
                    });
                    this.$router.push("/mvshopping");
                })  
            }
                
        },
        goumai(){//控制二维码
             if(this.session==null){
                this.$messagebox({
                    title:"请先登录",
                    message:"是否跳转到登录界面？",
                    showConfimButton:true,//显示确定按钮
                    showCancelButton:true,//显示取消按钮
                })
                .then(result=>{
                    if(result=="confirm"){
                        this.$router.push("/dl")
                    }
                });
             }else{
                 this.show=true; 
                 this.show2=false;
             }
        },
        saoma(e){//控制二维码
           if(e.target.getAttribute("class")=="iconfont icon-cuo3 p2"){
               this.show=false;
               this.show2=true;
           }
        },
        seatzuo(){
            history.go(-1)
            sessionStorage.setItem("seatz",this.pid)  
        },
    },
    created(){
        this.pid=this.$route.query.pid//rou传值
        // console.log(this.pid)
        if(sessionStorage.getItem("price")==null){
            this.$router.push("/mvysg")//没价格就跳回逸速购
        }else{
            this.ysgprice=sessionStorage.getItem("price") //保存逸速购的价格
        };
        this.ysgtime=sessionStorage.getItem("time") //保存逸速购的时间
        this.ysgtitle=sessionStorage.getItem("title") //保存逸速购的4d
        this.ysgxuan=sessionStorage.getItem("xuantime") //保存逸速购的当前日期
        this.session=sessionStorage.getItem("sessionLogin");
        this.ysg()//获取逸速购资源
    },
    components:{
        mvheader,
        mverweima,
    },
    
    mounted(){
        var zong=this.$refs.seatzongzong.children;//选座最外div
            this.shuzu=zong;
        var dibuwai=this.$refs.dibuh;//底部座位号
            this.dibuwai=dibuwai
            this.erz=this.dibuwai.children
        for(var i=0;i<zong.length;i++){//每个座位
            if(i==0){
                this.dd1=zong[i].children;
            }else if(i==1){
                this.dd2=zong[i].children;
            }else if(i==2){
                this.dd3=zong[i].children;
            }else if(i==3){
                this.dd4=zong[i].children;
            }else if(i==4){
                this.dd5=zong[i].children;
            }else if(i==5){
                this.dd6=zong[i].children;
            }else if(i==6){
                this.dd7=zong[i].children;
            }
        };
        //随机选座位
        function f1(){//第几排
            var ge=10//第几排能选几个
            var sui2=0//第几个
           
            var sui1=Math.floor(Math.random()*7);//第几排
            if(sui1<=2){
                sui2=Math.floor(Math.random()*ge);
            }else if(sui1>3&&sui1<=4){
                ge=8
                sui2=Math.floor(Math.random()*ge);
            }else{
                ge=6
                sui2=Math.floor(Math.random()*ge);
            }
            return sui1
        }
        function f2(){//每排能选几个
            var ge=10//第几排能选几个
            var sui2=0//第几个
            var sui1=Math.floor(Math.random()*7);//第几排
            if(sui1<=2){
                sui2=Math.floor(Math.random()*ge);
            }else if(sui1>3&&sui1<=4){
                ge=8
                sui2=Math.floor(Math.random()*ge);
            }else{
                ge=6
                sui2=Math.floor(Math.random()*ge);
            }
            return sui2
        }

        var ff=Math.floor(Math.random()*6);//随机选几个
        setTimeout(function(){           
            for(var i=0;i<=ff;i++){
            zong[f1()].children[f2()].style.color="rgb(255, 87, 21)"
            
            }
        },300)
    },
    watch:{
        
        
    },
}
</script>


<style scoped>
    @import "../assets/css/seat.css";
</style>
