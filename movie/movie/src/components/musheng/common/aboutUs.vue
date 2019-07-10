<template>
  <div>
    <!-- 关于我们的页面 -->
    <shezhitop :sehzhizuo="sehzhizuo"></shezhitop>
    <div style="text-align:center;">
      <img src="../../../assets/myimg/logo.jpg" class="usimg">
    </div>
    <div class="listaa">
      <span>最新版本：</span>
      <span>版本号2.2</span>
    </div>
    <div class="listaa">
      <span>当前版本：</span>
      <span>版本号</span>
    </div>
    <div class="listaa">
      <span>客服妹妹电话：</span>
      <span>400-***-8888</span>
    </div>
    <span class="banquan">Copyright © JinYi. All Rights Reserved.</span>
  </div>
</template>
<script>
import shezhitop from "./shezhi"
export default {
  props:{
    // us:{type:Function}
  },
  data(){
    return{
      sehzhizuo:"关 于 我 们"
    }
  },
  components:{
    shezhitop
  },
  methods:{
    // us(){this.$router.push("/Setup")}
  }
}
</script>
<style scoped>
  @import "../../../assets/css/aboutus.css";
</style>
