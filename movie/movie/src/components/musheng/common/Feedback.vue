<template>
  <div>
    <!-- 意见反馈页面 -->
    <shezhitop :sehzhizuo="sehzhizuo"></shezhitop>
    <label style="padding:3px;border:1px solid #f5f5f5;background-color:whitesmoke;">
      <textarea class="siteqq" rows="3" cols="10"  placeholder="感谢您关注本院电影，希望您多提意见和建议" ></textarea>
      <input type="email" placeholder="联系邮箱" name="email" class="eamilee">
    </label>
    <div>
      <button class="buttonrr">提交</button>
    </div>
  </div>
</template>
<script>
import shezhitop from "./shezhi"
export default {
  props:{
    // opinion:{type:Function}
  },
  data(){
    return{
       sehzhizuo:"意 见 反 馈"
    }
  },
  components:{
    shezhitop
  },
  methods: {
    // opinion(){ this.$router.push("/Setup")}
  },
}
</script>
<style scoped>
  
  @import "../../../assets/css/feedback.css";
</style>















