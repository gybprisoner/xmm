//构建web服务器
//引入模块
const http=require("http");
const mysql=require("mysql");
const express=require("express");
const session=require("express-session");
const bodyParser=require("body-parser");
const cors=require("cors");
/*引入路由模块 */
var Index=require("./router/index");
var login=require("./router/login");
var register=require("./router/reg");
var product=require("./router/product");
var forum=require("./router/forum");
//创建express对象
var app=express();
app.listen(3000);//绑定监听端口
//处理跨域请求
app.use(cors({
  origin:['http://127.0.0.1:8080',
  'http://localhost:8080'],
  credentials:true
}));
//添加session功能
app.use(session({
  secret:"128位字符串",
  resave:true,
  saveUninitialized:true
}));


//使用body-parser中间件
// app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//托管静态资源到public目录下
app.use(express.static("public"));

//使用路由器来管理路由
app.use("/index",Index);
app.use("/login",login);
app.use("/reg",register);
app.use("/product",product);
app.use("/forum",forum);


