const express = require('express');
const bodyParser = require('body-parser');

// start server
let server = express();
server.listen(8080);

// router

//=============POST 数据解析=========================

// 解析数据，解析的数据在req.body上
// post 传输的数据是x-www-form-urlencoded
server.use(bodyParser.urlencoded({
    extended: false
}));

server.post('/reg', (req, res, next) => {
    //console.log("request data: " + req.body);
    res.send(req.body);
});

//=============GET 数据解析=========================

server.get('/a', (req, res, next) => {
    // 获取get请求的数据
    console.log("request data: " + req.query);

    res.send(req.query);
});


server.use(express.static('./static/'));


