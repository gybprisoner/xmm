<template>
<div class="activity">
    <acheader :sehzhizuo="sehzhizuo"></acheader>
  <div class="event">
    <p><img :src="require(`../assets/qz/huodong/${data.img}`)"></p>
    <p>温馨提示:</p>
    <p class="pptitle">{{data.title}}</p>
    <p>{{data.pla}}</p>
    <p>{{data.plb}}</p>
    <p>{{data.plc}}</p>
    <p>{{data.pld}}</p>
    <p>{{data.ple}}</p>
  </div>
  <div class="but">
    <div class="but01">
        <span class="spn">
            <img src="../assets/img/cyrs.png">
            <span>{{data.person}}</span>
        </span>
        <span class="spn">
            <img src="../assets/img/ld.png">
            <span>{{data.time}}</span>
        </span>
    </div>
    <!-- <div class="but02">已结束</div> -->
  </div>
</div>

</template>

<script>
import acheader from './musheng/common/shezhi'
export default {
    data() {
        return {
            sehzhizuo:"活 动 咨 询",
            data:{
                img:"1.jpg",
            },
            xid:1,
        }
    },
    methods:{
        datashuju(){
            var url="forum/qzdetails";
            var id=this.xid
            this.axios.get(url,{params:{
                id:id
            }})
            .then(result=>{
               this.data=result.data.data[0]
            })
        }
    },
    components:{
        acheader,
    },
    created(){
       this.xid=this.$route.query.id
        this.datashuju();
    },
}
</script>
<style scoped>
@import "../assets/css/acti.css";
</style>
