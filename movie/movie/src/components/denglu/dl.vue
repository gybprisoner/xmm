<template>
    <div class="danll">
       <tou :neibu="neibu"></tou>
       <div class="denglu">
           <span :class="spgd" @click="csjh">手机号登录</span>
           <span :class="spzh" @click="czh">账号登录</span>
       </div>

        <div class="ccyc">
            <ul class="daul" :style="yidong">
            <li>
               <div class="tanxingdl">
                   <span>手机号：</span>
                   <input autofocus type="text" v-model="sjh" class="innn">
                   <button class="hqyzm" @click="panduan" :disabled="jinyong">{{yanzhengma}}</button>
                </div> 
               <div class="tanxingdl"><span>验证码：</span><input type="password" v-model="pdyzm"  class="innn"></div> 
            </li>
            <li>
               <div class="tanxingdl">
                   <span>账号：</span>
                   <input type="text" v-model="uname"  class="innn">
                   </div> 
               <div class="tanxingdl">
                   <span>密码：</span>
                   <input type="password" v-model="upwd"  class="innn">
                </div> 
            </li>
            </ul>
        </div>
        <div :style="dl" class="dl_anniu">
            <button @click="login">登 录</button>
        </div>
        <div :style="sjdl" class="dl_anniu">
            <button @click="ruayzm">手机登录</button>
        </div>



        <div class="disfdl"><span>———————&nbsp;&nbsp;</span><span>第三方登录</span><span>&nbsp;&nbsp;———————</span></div>
        <div class="dsfrj">
            <img src="../../assets/myimg/qq.jpg" >
            <img src="../../assets/myimg/weibo.jpg" >
        </div>
    <div>

    </div>
    </div>
</template>

<script>
import tou from './tou'
export default {
    data() {
        return {
            yidong:"left:0%;",
            spgd:{
                spgdd:false
            },
            spzh:{
                spgdd:true
            },
            uname:"",//用户名
            upwd:"",//密码
            sjh:'',
            yzm:'',
            pdyzm:'',
            dl:"display:none",
            sjdl:"",
            neibu:"登 录",
            jinyong:false,
            shu:10,
            yanzhengma:"获取验证码"
        }
    },
    methods:{
        ruayzm(){
            if(this.pdyzm==this.yzm&&this.pdyzm!=''){
               var url="login/login";
                this.axios.post(url,{//post的传值方式
                uname:"游客(手机登录)",
                upwd:123,
                })
                .then(result=>{
               if(result.data.code==1){
                   this.$toast({
                    message:"一号影院欢迎您（建议使用账户密码登录）！",
                    duration:1500,
                    iconClass:"iconfont icon-biaoqing4"
                    });
                   this.$router.push("/mvhome");
                   sessionStorage.setItem("sessionLogin",result.data.session);
                   this.delyou()//删除游客购物车
               }else{
                   this.$toast("亲，手机登录正在更新中，请使用账户/密码进行登录");
               }
                })
            }else{
                 this.$toast({
                    message:"验证码错误，请重新输入。",
                    duration:1000,
                    // iconClass:"iconfont icon-biaoqing4"
                    });
            }
        },
        panduan(){
            var bool=/^((\+86|0086)\s+)?1[3-8]\d{9}$/.test(this.sjh);
            var kkw="";
            if(bool){
                for(var i=0;i<6;i++){
                    kkw+=parseInt(Math.random()*9);
                }
                 this.$toast({
                    message:`您的验证码为${kkw}`,
                    duration:3000,
                    });
                this.yzm=kkw;
                this.jinyong=true;
                this.yanzhengma=`获取中(${this.shu})`
                var t=setInterval(()=>{
                    this.shu--
                    this.yanzhengma=`获取中(${this.shu})`
                    if(this.shu==0){
                        this.yanzhengma="获取验证码"
                        this.jinyong=false;
                        clearTimeout(t);
                        this.shu=10;
                    }
                },1000)
               
            }else{
                this.$toast({
                message:"请输入正确的手机号！",
                duration:1000,
                });
            }
        },
        csjh(){
            this.spzh.spgdd=true;
            this.spgd.spgdd=false;
            this.yidong="left: 0;"
            this.dl="display:none;"
            this.sjdl="display:block;"
        },
        czh(){
            this.spzh.spgdd=false;
            this.spgd.spgdd=true;
            this.yidong="left:-100%;";
            this.dl="display:block;"
            this.sjdl="display:none;"
        },
        login(){//登录的axios
            var url="login/login";
            this.axios.post(url,{//post的传值方式
                uname:this.uname,
                upwd:this.upwd,
            })
            .then(result=>{
                // console.log(this.uname)
                // console.log(result)
               if(result.data.code==1){
                   this.$toast({
                    message:"一号影院欢迎您！",
                    duration:1500,
                    iconClass:"iconfont icon-biaoqing4"
                    });
                   this.$router.push("/mvhome")
                   sessionStorage.setItem("sessionLogin",result.data.session);
                   //添加跳转
               }else{
                   this.$toast({
                    message:"用户名或者密码错误！",
                    duration:1000,
                    iconClass:"iconfont icon-bukaixin1"
                    });
               }
            })
        },
        delyou(){
            var url="product/delYou";
            this.axios(url)
            .then(result=>{
            })
        },
    },
    components:{
        tou
    }

}
</script>


<style scoped>
    @import "../../assets/css/dl.css"
</style>
