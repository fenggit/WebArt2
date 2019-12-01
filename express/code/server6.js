const express = require('express');
const cookieParser = require('cookie-parser');

// start server
let server = express();
server.listen(8080);

server.use(cookieParser());

server.get('/a', (req, res) => {
    // 获取客户端的cookies
    console.log(req.cookies);

    // 在前端，F12，调试模式 -> application ->cookie ->查看
    res.cookie('amount', 100, {
        //有效期：14天
        maxAge: 14 * 86400 * 100,

        //path:'/',
        //domain:'baidu.com'
    });

    res.send("success：" + JSON.stringify(req.cookies));
    //res.end();
});

