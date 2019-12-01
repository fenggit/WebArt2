const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

// start server
let server = express();
server.listen(8080);

// cookie-session:默认加密的
server.use(cookieSession({
    keys: ['werwer', 'asdsdad', 'weweqwe'], //循环密钥,随便写
    maxAge: 20 * 60 * 1000,//为了方式sessionId被劫持，一般都是20分钟
}));


server.get('/', (req, res) => {
    console.log(req.session);
    if (!req.session['view']) {
        // 第一次访问没有数据
        req.session['view'] = 1;
    } else {
        req.session['view']++;
    }

    //  这个数据，cookie里面不会存储的
    req.session['amount'] = 100;

    res.send(`欢迎你第${(req.session['view'])}次访问,您的余额是${req.session['amount']}元`);
    //res.send("success：" + JSON.stringify(req.cookies));
});

