<template>
    <div class="zujian" @click="zixun">
        <router-link :to="{path:'acti',query:{id:id}}">
            <div>
                <div class="zjimg"><img :src="require(`../../assets/qz/huodong/${img}`)" alt=""></div>
                <div class="daojis">
                    <p>{{title}}</p>
                    <p class="txxqz"><span class="iconfont icon-user6 qzif">{{person}}人参与</span><span class="iconfont icon-unie65f qzif">{{time}}</span></p>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    props:["title","img","person","time","id"],//父级传来的数据
    methods: {
        zixun(){
            // this.$router.push("/acti");
        },
    },
}
</script>

<style scoped>
     @import "../../assets/css/quanzi_01.css";
</style>
