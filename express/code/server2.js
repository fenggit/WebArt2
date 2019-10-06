const express = require('express');

// start server
let server = express();
server.listen(8080);

// router

server.get('/a', (req, res, next) => {
    res.send("aaa");
});

server.get('/b', (req, res, next) => {
    res.send("bbb");
});

// 设置静态文件，放在最后，避免这里面有文件和接口名字一样
server.use(express.static('./static/'));
