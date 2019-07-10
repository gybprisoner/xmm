<template>
<div>
  <div class="page-tabbar">
    <div class="page-wrap">
      <!-- 在模块中调用myhead组件 -->
      <myhead :portraitImg="require('../../assets/user/wdl.jpg')" v-show="headshow1"></myhead>
      <myloghead  v-show="headshow2"></myloghead>
    <div ></div>
      <tr class="listmm">
        <td  class="mylist" @click="myhomes">
          <i class="iconfont icon-wodezhuye" style="color:#0c98af"></i>
          <p>我的主页</p>
        </td>
        <td  class="mylist" @click="myshpp">
          <i class="iconfont icon-gouwuche2" style="color:#998278"></i>
          <p >我的购物车</p>
        </td>
        <td class="mylist" style="border-right:0;" @click="info">
          <i class="iconfont icon-xiaoxitongzhi" style="color:#0c98af"></i>
          <p>消息通知</p>
        </td>
      </tr>
      <tr class="listmm">
        <td  class="mylist" @click="help">
          <i class="iconfont icon-bangzhuzhongxin" style="color:#11c1f3"></i>
          <p>帮助中心</p>
        </td>
        <td class="mylist" @click="money">
          <i class="iconfont icon-wodeqianbao" style="color:#f57e07"></i>
          <p>我的钱包</p>
        </td>
        <td  class="mylist" style="border-right:0;" @click="liq">
          <i class="iconfont icon-liquanzhongxin" style="color:#d87852"></i>
          <p>礼券中心</p>
        </td>
      </tr>
      <tr class="listmm">
        <td  class="mylist" @click="myfoot">
          <i class="iconfont icon-roadbook" style="color:#28a54c"></i>
          <p>我的足迹</p>
        </td>
        <td  class="mylist" @click="wenhua">
          <i class="iconfont icon-wenhuajianshe" style="color:#28a54c" @click="jinyi"></i>
          <p @click="jinyi">一号文化</p>
        </td>
        <td  class="mylist" style="border-right:0;">
          <i class="iconfont icon-shezhi" style="color:#0c98af" @click="sheshe"></i>
          <p @click="sheshe">系统设置</p>
        </td>
      </tr>
    </div>
  </div>
</div>
</template>
<script>
//引入文件
import Myhead from './common/Myhead'
import Myloghead from './common/Myloghead'
export default {
  props:{
    // wodezhuye:{type:Function}
  },
  data(){
    return{
    
    }
  },
  props:["headshow1","headshow2"],
  methods: {
    sheshe(){
      this.tianzong("/setup");
    },
    jinyi(){
        
    },
    myshpp(){
      this.tianzong("/mvshopping");
    },
    help(){//帮助
      this.$router.push("/mvhelp");
    },
    liq(){
      this.tianzong("/mvli");
    },
    money(){
      this.tianzong("/mvmoney");
    },
    myhomes(){
      this.tianzong("/mvmyhome");
    },
    info(){
      this.tianzong("/mvinfo");
    },
    wenhua(){
      this.$router.push("/mvculture");
    },
    myfoot(){
      this.tianzong("/mvfoot");
    },

    tianzong(t){
      var session=sessionStorage.getItem("sessionLogin");
      if(session!==null){
        this.$router.push(t);
      }else{
        this.$toast({
          message:"亲，请先登录",
          duration:1000,
          iconClass:"iconfont icon-biaoqing4"
        });
        this.$router.push("/dl");
      }
    }
  },
  created() {
  
  },
  mounted() {
  },
  components:{//注册组件
    "myhead":Myhead,
     "myloghead":Myloghead
  }
}
</script>
<style scoped>
  @import "../../assets/css/my.css";
</style>
