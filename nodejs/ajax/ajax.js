/**
 * Created by river on 2019/7/22.
 */
const http = require("http");
<!--跨域-->
let allowOrigin = {
    "http://localhost": true,
    "http://localhost:63342": true,
    "http://aaa.com": true,
    "https://aaa.com": true
};

http.createServer((req, res) => {
    console.log(req.headers);

    // 原地址
    let {origin} = req.headers;
    // 指定一部分域名可以跨域
    if (allowOrigin[origin]) {
        res.setHeader("Access-Control-Allow-Origin", "*");
    }

    // 设置ajax所有的允许跨域
    //res.setHeader("Access-Control-Allow-Origin", "*");
    res.write(`{"a":12,"b":"Blue"}`);
    res.end();

}).listen(8080);