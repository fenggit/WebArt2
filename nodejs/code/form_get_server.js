// 引用系统http库
const http = require('http');

const queryString = require('nodejs/nodelib/querystring');


// client : http://localhost:8080/1.html
let server = http.createServer((req, res) => { //有人来请求
    console.log("请求来了==>" + req.url);

    let [url, query] = req.url.split("?");

    let get = queryString.parse(query);

    console.log(url, get);

    res.write("from server : success");
    res.end();

});

// 监听，一直运行
server.listen(8080);