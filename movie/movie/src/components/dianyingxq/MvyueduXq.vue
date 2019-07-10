<template>
    <div class="zx_kb">
       <ydhead :sehzhizuo="sehzhizuo"></ydhead>
        <div class="img1qqq">
            <img :src="img0">
            
            <span>推荐度:{{data1.tuijiandu}}</span>
        </div>

        <div class="text">
            <div class="text_zj">{{data1.title}}</div>
            <div class="text_1">
                <div>阅读</div>
                <div class="muyi">
                    <span>{{data1.subtitle}}&nbsp;&nbsp;&nbsp;{{data1.satrttime}}&nbsp;&nbsp;&nbsp;{{data1.starthr}}</span>
                    <span>阅读({{data1.yueduliang}})</span>
                </div>
         </div>
        <div class="pimg">
            <p class="shouqq">{{data1.introa}}</p><!-- 文字 -->
            <p><img :src="img1"></p>

            <p class="shouqq">{{data1.introb}}</p><!-- 文字 -->
            <p ><img :src="img2"></p>

            <p class="shouqq">{{data1.introc}}</p><!-- 文字 -->
            <p><img :src="img3"></p>

            <p class="shouqq">{{data1.introd}}</p><!-- 文字 -->
            <p><img :src="img4"></p>

            <p class="shouqq">{{data1.introe}}</p><!-- 文字 -->
            <p><img :src="img5"></p>

            <p class="shouqq">{{data1.introf}}</p><!-- 文字 -->
            <p><img :src="img6"></p>

            <p class="shouqq">{{data1.introg}}</p><!-- 文字 -->
            <p><img :src="img7"></p>

            <p class="shouqq">{{data1.introh}}</p><!-- 文字 -->
            <p><img :src="img8"></p>
            <p class="shouqq">{{data1.introi}}</p><!-- 文字 -->
       </div>

     

        <div class="text_js">
            <div class="js_left">
                <span class="iconfont icon-xin1">&nbsp;46</span>
                <span class="iconfont icon-uniEBC">&nbsp;1</span>
            </div>
            <div class="js_right">
                <span>2019-06-12</span>
                <span>15:37:44</span>
            </div>
        </div>
        </div>
        <div class="divBg"></div>
        <div class="shuohuang">
            <p>说说</p>
        </div>


        <div class="fabiao">
            <input type="text" placeholder="写上评论..."><button @click="xianshi">发表</button>
        </div>
        <div class="pinglun">
            <pl :ssimg="ssimg" :ssname="ssname" :sspl="sspl"></pl>
        </div>
        <div class="cxk"></div>
    </div>
</template>

<script>
 import pl from './shuoshuo'
import ydhead from '../musheng/common/shezhi'
export default {
    data() {
        return {
            data1:[],
            img0:require(`../../assets/index/yueduxq/01.jpg`),
            img1:require(`../../assets/index/yueduxq/011.jpg`),
            img2:require(`../../assets/index/yueduxq/012.jpg`),
            img3:require(`../../assets/index/yueduxq/013.jpg`),
            img4:require(`../../assets/index/yueduxq/014.jpg`),
            img5:require(`../../assets/index/yueduxq/015.jpg`),
            img6:require(`../../assets/index/yueduxq/016.jpg`),
            img7:require(`../../assets/index/yueduxq/017.jpg`),
            img8:require(`../../assets/index/yueduxq/018.jpg`),
            yid:1,
            sehzhizuo:"一 号 推 荐",
            ssimg:"3.jpg",
            ssname:"四剑客",
            sspl:"我爱世界，世界爱我 .成长是需要代价的。但有些代价是否是太大，需要牺牲那么多身边亲人和朋友…  "
   
        
        }
    },
    methods:{
        datashuju(){
            var url="product/yueduXq"
            this.axios(url,{params:{
                id:this.yid
            }})
            .then(result=>{
                this.data1=result.data.data[0];
                var ig=result.data.data[0];
                 this.img0=`${ig.imga==""||ig.imga==null?"":require(`../../assets/index/yueduxq/${ig.imga}`)}`

                 this.img1=`${ig.imgb==""||ig.imgb==null?"":require(`../../assets/index/yueduxq/${ig.imgb}`)}`
                 this.img2=`${ig.imgc==""||ig.imgc==null?"":require(`../../assets/index/yueduxq/${ig.imgc}`)}`
                 this.img3=`${ig.imgd==""||ig.imgd==null?"":require(`../../assets/index/yueduxq/${ig.imgd}`)}`
                 this.img4=`${ig.imge==""||ig.imge==null?"":require(`../../assets/index/yueduxq/${ig.imge}`)}`
                 this.img5=`${ig.imgf==""||ig.imgf==null?"":require(`../../assets/index/yueduxq/${ig.imgf}`)}`
                 this.img6=`${ig.imgg==""||ig.imgg==null?"":require(`../../assets/index/yueduxq/${ig.imgg}`)}`
                 this.img7=`${ig.imgh==""||ig.imgh==null?"":require(`../../assets/index/yueduxq/${ig.imgh}`)}`
                 this.img8=`${ig.imgi==""||ig.imgi==null?"":require(`../../assets/index/yueduxq/${ig.imgi}`)}`
            })
        },
        xianshi(){
        }
    },
    created(){
       this.yid=this.$route.query.yid
        this.datashuju()

    },
    mounted(){
    },
    components:{
     pl,
    ydhead,
    }
}
</script>

<style scoped>
    @import "../../assets/css/yueduxq.css";
</style>

