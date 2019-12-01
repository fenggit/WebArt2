const express = require('express');
const cookieParser = require('cookie-parser');

// start server
let server = express();
server.listen(8080);

server.use(cookieParser(
    'miyao' // 签名用对密钥，自己定义
));

server.get('/a', (req, res) => {
    // 获取客户端的cookies
    console.log("cookie:", req.cookies); //未签名
    console.log("signed cookie :", req.signedCookies);//签名的多了，会导致存储增加，cookie的大小最多4k

    // 在前端，F12，调试模式 -> application ->cookie ->查看
    res.cookie('amount', 100, {
        //httpOnly: true,//只允许服务器设置
        //secure: true,   //只有https才起作用
        signed: true, //设置当前cookie签名，这样客户端无法随便修改cookie
        //有效期：14天
        maxAge: 14 * 86400 * 100,

        //path:'/',
        //domain:'baidu.com'
    });


    res.send("success：" + JSON.stringify(req.cookies));
    //res.end();
});

