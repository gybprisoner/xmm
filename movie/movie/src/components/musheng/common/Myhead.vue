<template>
<div class="page-headm">
  <div class="page-head2m">
    <div class="portraitm">
      <img :src="portraitImg" style="width:80px;height:80px" alt="">
    </div>
    <div class="mybtnm">
      <span class="btnssm" @click="loginin">登录</span>
      <span class="btnssm" @click="regreg">注册</span>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props:{
     portraitImg:{default:""},
    // loginItem:{type:Function},
    // registerItem:{type:Function}
  },
  methods:{
    loginin(){
      this.$router.push("/dl");
    },
    regreg(){
      this.$router.push("/zc");
    },
    // loginItem(){
    //   this.$router.push("/login")
    // },
    // registerItem(){
    //   this.$router.push("/register")
    // }
  },
  data(){
    return{}
  }
}
</script>
<style scoped>
   @import "../../../assets/css/myhead.css";
</style>
