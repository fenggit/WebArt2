// 引用系统http库
const http = require('http');
// 处理url
const url = require('nodejs/nodelib/url');


// client : http://localhost:8080/1.html
let server = http.createServer((req, res) => { //有人来请求
    console.log("请求来了==>" + req.url);

    let resultAll = url.parse(req.url, true);

    //console.log(resultAll);


    // 这个pathname, query名字和数据绑定
    let {pathname, query} = url.parse(req.url, true);
    console.log(pathname, query);

    res.write("from server : success");
    res.end();

});

// 监听，一直运行
server.listen(8080);