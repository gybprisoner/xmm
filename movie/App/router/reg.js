const express = require("express");
const pool = require("../pool.js") ;
var router = express.Router();

router.post("/reg",(req,res)=>{
  var id="";
  var uname=req.body.uname;
  var upwd=req.body.upwd;
  var email="";
  var phone="";
  var avatar=req.body.avatar;
  var real_name="";
  var sex="";
  // console.log(uname,upwd)

  var sql="INSERT INTO mv_user VALUES (?,?,md5(?),?,?,?,?,?)";//密码加密
  pool.query(sql,[id,uname,upwd,email,phone,avatar,real_name,sex],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"注册成功"});
    }else{
      res.send({code:-1,msg:"注册失败"});
    }
  });
});


router.post("/verify",(req,res)=>{//验证用户名是否已经存在
	var sql="SELECT uid FROM mv_user WHERE uname=?";
	pool.query(sql,[req.body.uname],function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send({code:-1,msg:"用户名已经存在"});
		}else{
			res.send({code:1,msg:"用户名可用"});
		};
	});
});
module.exports=router;

















