<template>
<div class="zanzc">
    <tou :neibu="neibu"></tou>
    <div class="zhu_1">
        <div class="ruazc">
        用户名 : <input id="ipyhm" autofocus placeholder="请输入4~12位用户名" type="text" required v-model="uname" class="inppp"> <br>
        </div>
        <span id="spyhm" :style="red" class="sp sp1zc iconfont icon-unie95d yczc"></span>

        <div class="ruazc">
        &nbsp;&nbsp;&nbsp;密码 : <input class="ipmm inppp" type="password" placeholder="请输入6~16位密码" v-model="upwd" >
        </div>
        <span id="spmm" class="sp sp2zc iconfont icon-unie95d yczc"></span>
        <div>
            <button class="bt1zc" @click="btn_reg">注册</button>
        </div>
        <div class="sfty">注册代表您已同意<span>《金逸电影服务协议》</span></div>
    </div>
</div>
</template>


<script>
import tou from './tou'
export default {
    data() {
        return {
            yhm:'',
            uname:"",//用户名
            upwd:"",//密码
            isuname:false,
            isupwd:false,
            red:"",
            neibu:"注 册"
        }
    },
    methods: {
        reg(){//注册的axios
            var url="reg/reg";
            this.axios.post(url,{//post的传值方式
                uname:this.uname,
                upwd:this.upwd,
                avatar:"yonghu.jpg"
            })
            .then(result=>{
                // console.log(result)
            })
        },
        btn_reg(){//点击注册
            if(this.isuname==true&&this.isupwd==true){
                this.verify()
                this.reg()
                 this.$toast({
                    message:"注册成功！",
                    duration:1000,
                    });
                this.$router.push("/dl")
            //    alert("注册成功,跳转至首页");
            }else{
                this.$toast({
                    message:"请输入正确的注册信息。",
                    duration:1000,
                    });
            }
        },
        verify(){//验证用户是否已经存在的axios
            var url="reg/verify";
            this.axios.post(url,{
                uname:this.uname
            }).then(result=>{
                if(result.data.code==-1){
                    this.$toast({
                        message:"您的用户名已被使用请重新换一个"
                    })
                    this.red="color:#e83632"
                    this.isuname=false;
                }else{
                    this.red="";
                     this.isuname=true;
                }
            });
        },
    },
   
    components:{
        tou
    },
    beforeUpdate(){
        this.verify()//持续监听
    },
    mounted(){
        var aip=document.getElementById("ipyhm");
        var bip=document.getElementsByClassName("ipmm")[0];
        var asp=document.getElementById("spyhm");
        var bsp=document.getElementById("spmm");
        
        aip.onblur=()=>{
            var bool=/^[\w\u4e00-\u9fa5]{4,12}$/.test(aip.value);
            if(bool&&this.isuname){
                asp.className="sp sp1zc iconfont icon-unie95d xszc";
                this.isuname=true;
            }else{
                asp.className="cuow sp1zc iconfont icon-cuo2 xszc";
                this.isuname=false;
            }
        }
        bip.onblur=()=>{
        var bool=/^[\w!@#$%^&*?.]{6,16}$/.test(bip.value);
        if(bool){
            bsp.className="sp sp2zc iconfont icon-unie95d xszc";
            bsp.innerHTML="";
            this.isupwd=true;
        }else{
            bsp.className="cuow sp2zc iconfont icon-cuo2 xszc";
            bsp.innerHTML="";
            this.isupwd=false;
        }
        }   
    }
}
</script>
<style scoped>
    @import "../../assets/css/zc.css"
</style>
