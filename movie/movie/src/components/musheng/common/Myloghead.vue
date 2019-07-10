<template>
  <div class="page-head">
    <div class="daily">
      <p  class="meiyi">每日答题</p>
      <a href="javascript:;">
        <i class="iconfont icon-edit"></i>
        签到
      </a>
    </div>
    <!-- 头像，昵称和个性签名 -->
    <div class="page-head2">
      <div class="portrait">
        <img :src="require(`../../../assets/user/${youke.avatar}`)" style="width:80px;height:80px" >
      </div>
      <div class="myuname payou">
        <div>
          <span style="font-size:16px;">{{youke.uname}}</span>
        </div>
        <div class="payou">
          <span style="font-size:12px;">个性签名：<span class="huanyin">欢迎光临</span></span>
        </div>
      </div>
    </div>
    <!-- 会员等级 -->
    <div class="grade">
      <div class="myline"></div>
      <div class="mygrade">
        <h4>LV1</h4>
        <h4>LV2</h4>
        <h4>LV3</h4>
        <h4>LV4</h4>
        <h4>LV5</h4>
      </div>
      <div class="member">
        <span>金牌会员（点击切换）</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
   
  },
  data(){
    return{
      youke:{
        uname:"",
        avatar:"youke.jpg"
      },
    }
  },
  methods:{
    loglogya(){
      var url="login/loglog";
        this.axios.post(url)
        .then(result=>{
            this.youke=result.data.data[0]
            sessionStorage.setItem("useruname",result.data.data[0].uname);
            sessionStorage.setItem("useravatar",result.data.data[0].avatar);
        })
    }
  },
  mounted(){
    var session=sessionStorage.getItem("sessionLogin")
    if(session!==null){
      setTimeout(()=>{
        this.loglogya()
      },100)
    }
    
  },
}
</script>
<style scoped>
 @import "../../../assets/css/myloghead.css";
</style>
