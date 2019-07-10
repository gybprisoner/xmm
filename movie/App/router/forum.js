const express=require("express");
const pool=require("../pool");
var router=express.Router();

//圈子页面接口
router.get("/qzcar",(req,res)=>{
  var sql="SELECT cid,img,title,href FROM mv_qz_carousel"
  pool.query(sql,(err,result)=>{
    if(result.length==0){
      res.send({code:-1,msg:"圈子轮播为空"});
    }else{
      res.send({code:1,data:result});
    };
  })
});

//圈子活动数据资源获取
router.get("/activity",(req,res)=>{
  var sql="SELECT id,title,img,person,time,href FROM mv_qz_activity";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    if(result.length==0){
      res.send({code:-1,msg:"活动内容为空"});
    }else{
      res.send({code:1,data:result});
    };
  })
})

//圈子活动数据资源获取
router.get("/qzdetails",(req,res)=>{
  var id=req.query.id;
  var sql="SELECT id,title,img,pla,plb,plc,pld,ple,person,time FROM mv_qz_xq WHERE id=?";
  pool.query(sql,[id],(err,result)=>{
    if(err)throw err;
    if(result.length==0){
      res.send({code:-1,msg:"圈子详情内容为空"});
    }else{
      res.send({code:1,data:result});
    };
  })
})



module.exports=router;



























