const express = require('express');

// start server
let server = express();
server.listen(8080);

// router

server.get('/a', (req, res, next) => {
    console.log("a 1111");
    // send 是 express 框架提供的，可以支持很多种格式数据
    res.send({a: 10, b: 11});
});


server.get('/b', (req, res, next) => {
    console.log("b 1111");
    // 继续执行下一个/b 路由
    // 传参数给下一个
    req.username = "zhangsan";
    next();
});

server.get('/b', (req, res, next) => {
    console.log("b 22222："+req.username);
    res.send({b: 11,username:req.username});
});

server.post('/c', (req, res, next) => {
    console.log("cccc");
    res.send({c: 11});
});