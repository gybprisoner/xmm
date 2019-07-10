<template>
    <div class="sp_bg">
        <div v-show="show2">
            <div class="pos"></div>
        
            <div class="sp_top"> <!-- 页头 -->
                <div class="icon-lunbo-jiantouzuo iconfont sp_float" @click="goback"></div>
                <div class="sp_top_sp">购物车({{this.shun}})</div>
                <div class="shourigth"><span @click="spshou">首页</span></div>
            </div>
            <div>
                <div class="wupin_zong" v-for="(item,index) of shujuku" :key="index"><!--商品总div-->
                    <div class="gu">
                        <div class="gu_1">
                            <div class="gu_1_l">
                                <div class="iconfont icon-shangdian"></div>
                                <p> {{item.date}}-{{item.time}}</p>
                                <div class="icon-lunbo-jiantouyou iconfont "></div>
                            </div>
                            <div>
                                <p @click="redact">{{qiehuan}}</p>
                            </div>
                        </div>  
                    </div>
                
                    <div class="wupin">
                        <div class="wupin_inp">
                            <input type="checkbox" @change="xuan" @click="xia(index)"    ref="duzi"><!--选中按钮-->
                        </div>
                        <div class="wupin_img">
                            <img :src="require(`../assets/ysg/${item.img}`)">
                        </div>
                        <div class="wupin_intro">
                            <p class="wupin_intro_p1">{{item.title}}</p>
                            <p class="wupin_intro_p2">{{item.seat}}</p>
                            <div class="wupin_add">
                                <div class="wupin_money">
                                    <span>￥</span>
                                    <span>{{item.price}}</span>
                                </div>
                                <div class="wupin_but">
                                    <button @click="min(index)">-</button >
                                    <input type="text" class="add_inp" v-model="item.count"  readonly>
                                    <button @click="add(index)">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>

            <div class="wupin_bto"  v-if="this.dibu==true"> <!--底部结算导航-->
                <div class="bto_quan">
                    <mt-checklist v-model="value" :options="options" @change="quanbu" ref="qx">
                    </mt-checklist >
                    <!-- <input type="checkbox" @change="quanbu" ref="qx"> -->
                    <!-- <p  >全选</p> -->
                </div>

                <div class="bto_he">
                    <div class="bto_he_money">
                        <p>合计：</p>
                        <span class="bto_he_s1">￥</span>
                        <span class="bto_he_s2">{{qian.toFixed(2)}}</span>
                    </div>
                    <div class="bto_he_jie" @click="jiesuan">结算({{shu}})</div>
                </div>
            </div>


            <div class="wupin_bto" v-else-if="this.dibu==false"> <!--底部删除导航-->
                <div class="bto_quan">
                    <!-- <input type="checkbox"  ref="qx"   @change="quanbu"> -->
                     <mt-checklist v-model="value" :options="options" @change="quanbu" ref="qx">
                    </mt-checklist >
                    <!-- <p >全选</p> -->
                </div>

                <div class="bto_he">
                    <div class="bto_he_money  kong">
                    </div>
                    <div class="bto_he_jie shanchu" @click="del">删除({{delsum}})</div>
                </div>
            </div>
            <div class="btbt">

            </div>
        </div>
        <erweima @click.native="saoma" v-show="show"></erweima>
    </div>
</template>

<script>
import erweima from './Mverweima';
export default {
    data() {
        return {
            danxuan:0,//保存下标
            qian:0,//保存总计的总价
            shu:0,//选中的数量
            shun:0,//购物车总数量
            dibu:true,//控制底部导航的切换
            qiehuan:"编辑",
            delsum:0,//删除的数量
            tf:false,
            shujuku:[],
            show:false,//控制二维码
            show2:true,//控制页面
            quanshu:0,//购物车为空时，不能使用全选按钮
            value:[],
            options : [{
		  label: '全选',
		  value: 'A'
			},
			]
        }
    },
    components:{
        erweima,
    },
    methods:{
        min(e){//减法函数
            for(var i=0;i<this.shujuku.length;i++){
                if(e==i){
                    if(this.shujuku[i].count>1){
                        this.shujuku[i].count--;
                    }else{
                        return;
                    };
                    
                };
            };
           this.jiajian();//调用计算总计函数
        },
        add(s){//加法函数
            
            for(var i=0;i<this.shujuku.length;i++){
                if(s==i){
                    if(this.shujuku[i].count<100){
                       this.shujuku[i].count++;
                    }else{
                        return;
                    };
                    
                };
            };
           this.jiajian();//调用计算总计函数
          
        },
        xuan(e){//单个按钮
        
            var add=0;//选中价格
            var min=0;//取消价格
            var zshu=0;//选中数量
            var jshu=0;//取消数量
            var zongshu=0;//删除选中的数量
            for(var i=0;i<this.shujuku.length;i++){//当前选中的
                if(e.target.checked==true){
                    if(this.danxuan==i){
                        add=this.shujuku[i].count*this.shujuku[i].price;//选中的价格
                        zshu=this.shujuku[i].count;//选中的数量
                    };
                }else{
                    if(this.danxuan==i){//当前去取消的
                       min=this.shujuku[i].count*this.shujuku[i].price;//取消的价格
                       jshu=this.shujuku[i].count;//取消的数量
                    };
                };
                if(this.danxuan==i){//给cd监听状态
                    this.shujuku[i].cd=e.target.checked
                };

                if(this.shujuku[i].cd==true){
                    zongshu++
                }
                
                
            };
            this.delsum=zongshu;//删除选中的数量
            this.qian+=add;//将总计赋值给页面上
            this.qian-=min;//将总计赋值给页面上
            this.shu+=zshu//将选中的数量赋值给页面上
            this.shu-=jshu//将取消选中的数量赋值给页面上
            var sjj=0//查看有几个选中的
            var ipn=this.$refs.duzi//独自的按钮
           // var qx=this.$refs.qx//全选的按钮
            for(var q of ipn){//让独自按钮控制全选按钮的状态
                if(q.checked==true){
                    sjj++
                }
                if(sjj==ipn.length){
                     this.value=["A"]
                }else{
                    this.value=[]
                }
                
            }
            
        },
        xia(e){//拿到当前的下标
            this.danxuan=e;   
        },

        jiajian(){//加减共用函数
            this.qian=0;
             var mo=0;
             var moshu=0;
           for(var p of this.shujuku){
               if(p.cd==true){//为选中转态 才计算
                   mo+=p.price*p.count
                   moshu+=p.count
               }
           }
           this.qian=mo//总计
           this.shu=moshu//结算数量
        },
        redact(){//控制编辑和删除的切换
            if(this.qiehuan=="编辑"){
                this.qiehuan="取消";
                this.dibu=false;
            }else{
                this.qiehuan="编辑";
                this.dibu=true;
            }
             
        },
        shuju(){//axios请求
           this.axios.get("product/cart").then(
            (result)=>{
                if(result.data.code==1){
                    // console.log(result)
                    var rows=result.data.data;
                    var n=0;
                    for(var p of rows){
                        p.cd=false;//给数组添加一个状态属性
                        n++
                    };
                    this.shun=n;//购物车总数量
                    this.shujuku=rows
               }else{
                   this.$toast("亲，去添加自己喜欢的商品吧！");
                   this.quanshu=-1
               }
            });
            
        },
        quanbu(){//全选按钮
       
        var rs=false;
        if(this.value==0){
            rs=true
        }else{
            rs=false
        }
        // console.log(e.disabled)
       // var rs=e.target.checked//全选 按钮的状态
            if(this.quanshu==-1){
                this.$toast("购物车为空");
                
            }else{

                
               // console.log(rs)
               var sb=0;//全部钱
               var jie=0//全部数量
               
               var qqxx=0;
               this.qian=0
               this.shu=0
               this.delsum=0
               for(var item of this.shujuku){//下面的选项状态 随全选状态改变
                   qqxx++
                   item.cd=rs;
                   if(rs==true){
                       sb+=item.price*item.count;
                       jie+=item.count;
                      
                   }
               }
               if(rs==true){
                   this.delsum=qqxx;
               }
               
               this.qian=sb//全部钱
               this.shu=jie//全部数量
               // console.log(123)
               //   console.log(this.shujuku)
   
                var ipn=this.$refs.duzi//独自的按钮(让全部按钮的状态控制独自按钮)
                   if(rs==true){
                       for(var ii of ipn){
                           ii.checked=true;
                       }
                   }else{
                       for(var ii of ipn){
                           ii.checked=false;
                       }
                   }
            }
        },
        del(){//删除按钮
            var id=""
            for(var d of this.shujuku){
                if(d.cd==true){
                    id+=d.id+","
                }
            };
            id=id.substring(0,id.length-1);
            if(id==""||id==undefined){
                 this.$toast("请选择需要删除的商品")
                }else{
                    this.$messagebox({
                        title:"删除商品",
                        message:"确定删除选中的商品吗？",
                        showConfirmButton:true,
                        showCancelButton:true
                    }).then(result=>{                       
                        if(result=="confirm"){
                            var url="http://localhost:3000/product/del_cart"; 
                            this.axios.get(url,{params:{id}}).then(result=>{
                                
                                var ipn=this.$refs.duzi
                                for(var che of ipn){
                                    che.checked=false  
                                };
                                //this.shuju();
                                //this.delsum=0;
                                history.go(0)
                            });
                             
                        }else{
                            return;
                        };
                    });
                };



            
            
        },
        goback(){//返回
            history.go(-1)
        },
        jiesuan(){//控制二维码
            if(this.shu==0){
                this.$toast("亲，请选择需要支付的商品")
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
        spshou(){
            sessionStorage.setItem("onon","no1");
            this.$router.push("/mvhome")
        },

    },
    watch:{
       
    },
    created(){
        var session=sessionStorage.getItem("sessionLogin");
        if(session!==null){
            this.shuju();
        }else{
            this.$router.push("/dl")
        };
    },
    mounted(){
       
    },

}
</script>

<style scoped>
    @import "../assets/css/shopping.css";
</style>
