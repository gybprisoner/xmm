const express=require("express");
var router=express.Router();
var pool=require("../pool.js");

//获取轮播图资源
router.get("/carousel",(req,res)=>{
  var sql="SELECT cid,img,title,href FROM mv_carousel";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    if(result.length==0){
      res.send({code:-1,msg:"轮播图为空"});
    }else{
      res.send({code:1,data:result});
    };
  });
});

//获取电影的商品详细介绍
router.get("/details",(req,res)=>{
  var sql="SELECT id,did,title,intro,time,up_time,details_intro,lg,md,grade,href,xihuan,noxihuan,yyimg,yyname,yypost,ssimg,ssname,sspl,yyimga,yyimgb,yynamea,yynameb,yyposta,yypostb FROM mv_mv_details WHERE id=?";
  pool.query(sql,[req.query.id],(err,result)=>{
    if(err)throw err;
    if(result.length==0){
      res.send({code:-1,msg:"商品详细为空"});
    }else{
      res.send({code:1,data:result});
    };
    
  })
})

//获取 电影院 资源
router.get("/cinema",(req,res)=>{
  var sql="SELECT id,title,subtitle,distance,href FROM mv_cinema";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    if(result.length==0){
      res.send({code:-1,msg:"影院地址为空"});
    }else{
      res.send({code:1,data:result});
    };
  })
})

//获取首页商品资源
router.get("/iproduct",(req,res)=>{
  var sql="SELECT id,iid,title,subtitle,img,price,href FROM mv_i_product";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    var i1=[];//正在上映
    for(var i=0;i<result.length;i++){
        if(result[i].iid==1){
          i1[i1.length]=result[i];
        };
    };
    var i2=[];//即将上映
    for(var i=0;i<result.length;i++){
        if(result[i].iid==2){
          i2[i2.length]=result[i];
        };
    };
    var i3=[];//猜你喜欢
    for(var i=0;i<result.length;i++){
        if(result[i].iid==3){
          i3[i3.length]=result[i];
        };
    };
    var i4=[];//电影阅读
    for(var i=0;i<result.length;i++){
        if(result[i].iid==4){
          i4[i4.length]=result[i];
        };
    };
    res.send({code:1,data1:i1,data2:i2,data3:i3,data4:i4,});
  });
});


//获取 选泽电影 资源
router.get("/xuanzeyy",(req,res)=>{
  var sql="SELECT img FROM mv_yyimg WHERE id=?";
  pool.query(sql,[req.query.id],(err,result)=>{
    if(err)throw err;
    if(result.length==0){
      res.send({code:-1,msg:"影院图片为空"});
    }else{
      res.send({code:1,data:result});
    };
  })
});


//分页查询
router.get("/sefen",(req,res)=>{
  var pno = req.query.pno;
  var ps = req.query.pageSize;
  if(!pno){pno=1}
  if(!ps){ps=4}
  var sql="SELECT id,title,subtitle,img,href,time,xx,pl FROM mv_fenye LIMIT ?,?"
  var offset = (pno-1)*ps;
  ps = parseInt(ps);
  //3:json
  pool.query(sql,[offset,ps],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"查询成功",data:result});
  });
});

module.exports=router;












