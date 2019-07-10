<template>
<div class="citypage">
    <chead :sehzhizuo="sehzhizuo"></chead>
    <div class="inp">
        <img src="../assets/img/search.png" class="inp-a">
        <input type="search" placeholder="搜索" class="inp-b">
    </div>  
        <span>定位城市</span>




    <div class="app">
        <div>
           <div class="app1">热门城市</div>
            <ul >
                <li v-for="(item,index) of items" :key="index" class="app2">{{item.name}}</li>
            </ul>
        </div>
        <div>
           <div class="app1">直辖市</div>
            <ul>
                <li v-for="(item1,index1) of aa" :key="index1" class="app2">{{item1.name}}</li>
            </ul>
        </div>
        <div>
           <div class="app1">河北</div>
            <ul>
                <li v-for="(item2,index2) of bb" :key="index2" class="app2">{{item2.name}}</li>
            </ul>
        </div>
        <div>
           <div class="app1">山西</div>
            <ul>
                <li v-for="(item3,index3) of cc" :key="index3" class="app2">{{item3.name}}</li>
            </ul>
        </div>
        <div>
           <div class="app1">内蒙古</div>
            <ul>
                <li v-for="(item4,index4) of dd" :key="index4" class="app2">{{item4.name}}</li>
            </ul>
        </div>
        <div>
           <div class="app1">辽宁</div>
            <ul>
                <li v-for="(item5,index5) of ee" :key="index5" class="app2">{{item5.name}}</li>
            </ul>
        </div>
        <div>
           <div class="app1">江苏</div>
            <ul>
                <li v-for="(item6,index6) of ff" :key="index6" class="app2">{{item6.name}}</li>
            </ul>
        </div>
        <div>
           <div class="app1">浙江</div>
            <ul>
                <li v-for="(item7,index7) of gg" :key="index7" class="app2">{{item7.name}}</li>
            </ul>
        </div>
        <div>
           <div class="app1">安徽</div>
            <ul>
                <li v-for="(item8,index8) of hh" :key="index8" class="app2">{{item8.name}}</li>
            </ul>
        </div>
        <div>
           <div class="app1">福建</div>
            <ul>
                <li v-for="(item9,index9) of ii" :key="index9" class="app2">{{item9.name}}</li>
            </ul>
        </div>
        <div>
           <div class="app1">江西</div>
            <ul>
                <li v-for="(item10,index10) of jj" :key="index10" class="app2">{{item10.name}}</li>
            </ul>
        </div>
        <div>
           <div class="app1">山东</div>
            <ul>
                <li v-for="(item11,index11) of kk" :key="index11" class="app2">{{item11.name}}</li>
            </ul>
        </div>
        <div>
           <div class="app1">湖北</div>
            <ul>
                <li v-for="(item12,index12) of ll" :key="index12" class="app2">{{item12.name}}</li>
            </ul>
        </div>
        <div>
           <div class="app1">湖南</div>
            <ul>
                <li v-for="(item13,index13) of mm" :key="index13" class="app2">{{item13.name}}</li>
            </ul>
        </div>
        <div>
           <div class="app1">广东</div>
            <ul>
                <li v-for="(item14,index14) of nn" :key="index14" class="app2">{{item14.name}}</li>
            </ul>
        </div>
        <div>
           <div class="app1">广西</div>
            <ul>
                <li v-for="(item15,index15) of oo" :key="index15" class="app2">{{item15.name}}</li>
            </ul>
        </div>
        <div>
           <div class="app1">海南</div>
            <ul>
                <li v-for="(item16,index16) of pp" :key="index16" class="app2">{{item16.name}}</li>
            </ul>
        </div>
        <div>
           <div class="app1">四川</div>
            <ul>
                <li v-for="(item17,index17) of qq" :key="index17" class="app2">{{item17.name}}</li>
            </ul>
        </div>
        <div>
           <div class="app1">宁夏</div>
            <ul>
                <li v-for="(item18,index18) of rr" :key="index18" class="app2">{{item18.name}}</li>
            </ul>
        </div>
        <div>
           <div class="app1">云南</div>
            <ul>
                <li v-for="(item19,index19) of ss" :key="index19" class="app2">{{item19.name}}</li>
            </ul>
        </div>    
    </div>
 </div>
</template>
<script>
import chead from './musheng/common/shezhi'
export default {
    data(){
        return {
            sehzhizuo:"选 择 城 市",
            items:[
                {name:"广州市"},
                {name:"北京市"},
                {name:"天津市"},
                {name:"上海市"},
                {name:"重庆市"},
                {name:"沈阳市"},
                {name:"苏州市"},
                {name:"杭州市"},
                {name:"福州市"},
                {name:"厦门市"},
                {name:"武汉市"},
                {name:"深圳市"},
                {name:"中山市"},
                ],
                aa:[
                {name:"北京市"},
                {name:"天津市"},
                {name:"上海市"},
                {name:"重庆市"},
                ],
                bb:[
                {name:"秦皇岛市"},
                {name:"邢台市"},
                {name:"唐山市"},
                ],
                
                cc:[
                {name:"太原市"},
                {name:"运城市"},

                ],
                dd:[
                {name:"呼和浩特市"},

                ],
                ee:[
                {name:"沈阳市"},
                {name:"大连市"},
                {name:"鞍山市"},
                {name:"抚顺市"},
                {name:"本溪市"},

                ],
                ff:[
                {name:"南京市"},
                {name:"无锡市"},
                {name:"常州市"},
                {name:"苏州市"},
                {name:"南通市"},
                {name:"盐城市"},
                {name:"扬州市"},
                {name:"镇江市"},

                ],
                gg:[
                {name:"杭州市"},
                {name:"宁波市"},
                {name:"嘉兴市"},
                {name:"绍兴市"},

                ],
                hh:[
                {name:"合肥市"},
                {name:"淮北市"},

                ],
                ii:[
                {name:"福州市"},
                {name:"厦门市"},
                {name:"莆田市"},
                {name:"泉州市"},
                {name:"漳州市"},

                ],
                jj:[
                {name:"南昌市"},
                {name:"吉安市"},
                {name:"九江市"},

                ],
                kk:[
                {name:"济南市"},
                {name:"青岛市"},
                {name:"威海市"},
                {name:"临沂市"},

                ],
                ll:[
                {name:"武汉市"},
                {name:"宜昌市"},
                {name:"襄阳市"},
                {name:"孝感市"},

                ],
                mm:[
                {name:"长沙市"},
                {name:"衡阳市"},
                {name:"岳阳市"},
                {name:"张家界市"},

                ],
                nn:[
                {name:"广州市"},
                {name:"深圳市"},
                {name:"佛山市"},
                {name:"江门市"},
                {name:"湛江市"},
                {name:"肇庆市"},
                {name:"阳江市"},
                {name:"东莞市"},
                {name:"中山市"},
                {name:"惠州市"},

                ],
                oo:[
                {name:"南宁市"},
                {name:"桂林市"},
                {name:"柳州市"},

                ],
                pp:[
                {name:"海口市"},
                {name:"三亚市"},

                ],
                qq:[
                {name:"成都市"},
                {name:"绵阳市"},

                ],
                rr:[
                {name:"银川市"},

                ],
                ss:[
                {name:"普洱市"},

            ],
        }     
    },
    methods: {
       
    },
    components:{
        chead,
    }
}
</script>
<style scoped>
    @import "../assets/css/city.css";
</style>