<template>
<!-- 设置的页面 -->
  <div class="szan">
    <shezhitop :sehzhizuo="sehzhizuo"></shezhitop>
    <div class="feedback" @click="yjfk">
      <p >意见反馈</p>
      <i class="iconfont icon-back5"></i>
    </div>
    <div class="aboutus" @click="guanyu">
      <p >关于我们</p>
      <i class="iconfont icon-back5"></i>
    </div>
    <mt-button  size="large" class="logout" @click="tuichu">退 出 登 录</mt-button>
  </div>
</template>
<script>
  import shezhitop from "./common/shezhi"
export default {
  props:{
  },
  data(){
    return{
      sehzhizuo:"设 置"
    }
  },
  methods: {
    houtui(){
      history.go(-1)
    },
    tuichu(){
      this.$messagebox({
        title:"退出登录",
        message:"亲，确定离开《一号影院》吗？",
        showConfimButton:true,//显示确定按钮
        showCancelButton:true,//显示取消按钮
      })
      .then(result=>{
        if(result=="confirm"){
          sessionStorage.removeItem('sessionLogin');
          this.$toast("《一号影院》随时欢迎您！");
          this.$router.push("/mvhome")
        }
      });
    },
    guanyu(){
      this.$router.push("/about")
    },
    yjfk(){
      this.$router.push("/fee")
    },
    
  },
  components:{
    shezhitop
  },
  created() {
  },
  mounted() {
  },
}
</script>
<style scoped>
 @import "../../assets/css/setup.css";
</style>
