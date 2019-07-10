const express=require("express");
var pool=require("../pool");
var router=express.Router();

//获取商城数据
router.get("/product",(req,res)=>{
  var sql="SELECT id,pid,title,subtitle,img,price,href FROM mv_product";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    if(result.length==0){
      res.send({code:-1,msg:"商品列表为空"});
    }else{
      res.send({code:1,data:result});
    };
  });
});

//获取逸速购资源
router.get("/schedule",(req,res)=>{
  var sql="SELECT id,title,time,subtitle,img,href FROM mv_img_center";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    if(result.length==0){
      res.send({code:-1,msg:"图片为空"});
    }else{
      res.send({code:1,data:result});
    };
  });
});
//获取逸速购的场次资源
router.get("/schedule2",(req,res)=>{
  var cid=req.query.cid
  // console.log(cid)
  var sql="SELECT id,cid,ccid,title,subtitle,time,subtime,topimg,ddimg,price,href FROM mv_cc_center WHERE cid=?";
  pool.query(sql,[cid],(err,result)=>{
    if(err)throw err;
     var c1=[];
         for(var i=0;i<result.length;i++){
             if(result[i].ccid==1){
                c1[c1.length]=result[i];
             }
         }
     var c2=[];
         for(var i=0;i<result.length;i++){
             if(result[i].ccid==2){
                c2[c2.length]=result[i];
             }
         }
         
    if(result.length==0){
      res.send({code:-1,msg:"场次为空"});
    }else{
      res.send({code:1,data1:c1,data2:c2});
    };
  });
});


//获取逸速购资源给购物车
router.get("/selcar",(req,res)=>{
  var sql="SELECT title,time,subtitle,img,href FROM mv_img_center WHERE id=?";
  pool.query(sql,[req.query.id],(err,result)=>{
    if(err)throw err;
    if(result.length==0){
      res.send({code:-1,msg:"数据为空"});
    }else{
      res.send({code:1,data:result});
    };
  });
});

//查询购物车
router.get("/cart",(req,res)=>{
	var cid=req.session.uid//session值
  var sql="SELECT id,title,date,seat,time,img,cid,price,count,ddd FROM mv_cart WHERE cid=?";
  pool.query(sql,[cid],(err,result)=>{
    if(err)throw err;
    if(result.length==0){
      res.send({code:-1,msg:"购物车为空"});
    }else{
      res.send({code:1,data:result});
    };
      
  });
});

//插入购物车
router.get("/incart",(req,res)=>{
  var id=""
  var title=req.query.title;
  var date=req.query.data;
  var seat=req.query.seat;
  var time=req.query.time;
  var img=req.query.img;
  var cid=req.session.uid//session值
  var price=req.query.price;
  var count=req.query.count;
  var ddd=req.query.ddd
  var sql="INSERT INTO mv_cart VALUES (?,?,?,?,?,?,?,?,?,?)";
  pool.query(sql,[id,title,date,seat,time,img,cid,price,count,ddd],(err,result)=>{
    if(err)throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"添加成功"});
    }else{
      res.send({code:-1,msg:"添加失败"});
    }
      
  });
});


//-删除指定购物车中一个商品   (删除所有商品)
router.get("/del_cart",(req,res)=>{
  //参数:id
  var id = req.query.id;
  //sql:
  //var sql = "DELETE FROM xz_cart WHERE id = ?";
  var sql =`DELETE FROM mv_cart WHERE id IN(${id})`;
  //json
  pool.query(sql,(err,result)=>{
     if(err)throw err;
     //console.log(result);
     res.send({code:1,msg:"删除成功"});
  });
})

//删除游客购物车
router.get("/delYou",(req,res)=>{
  //参数:id
  var cid =1;
  //sql:
  //var sql = "DELETE FROM xz_cart WHERE id = ?";
  var sql =`DELETE FROM mv_cart WHERE cid IN(${cid})`;
  //json
  pool.query(sql,(err,result)=>{
     if(err)throw err;
     //console.log(result);
     res.send({code:1,msg:"删除成功"});
  });
});

//阅读详情
router.get("/yueduXq",(req,res)=>{
  var id=req.query.id
  var sql="SELECT id,yid,tuijiandu,title,subtitle,starttime,starthr,yueduliang,introa,introb,introc,introd,introe,introf,introg,introh,introi,imga,imgb,imgc,imgd,imge,imgf,imgg,imgh,imgi,xihuan,pl,overtime,overhr FROM mv_yuedu_details WHERE id=?";
  pool.query(sql,[id],(err,result)=>{
    if(err)throw err;
    if(result.length==0){
      res.send({code:-1,msg:"阅读详情为空"});
    }else{
      res.send({code:1,data:result});
    };
  });
});

module.exports=router;























