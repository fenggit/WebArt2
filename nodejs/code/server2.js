// 引用系统http库
const http = require('http');
const fs = require("fs");

// client : http://localhost:8080/1.html
let server = http.createServer((req, res) => { //有人来请求
    console.log("请求来了==>" + req.url);

    // www/index.html
    fs.readFile(`../www${req.url}`, (error, buffer) => {
        if (error) {
            res.writeHeader(404);
            res.write("Not Found");
            res.end();
            console.log("error:" + error);
        } else {
            // 默认是200，可以不写
            res.writeHeader(200);
            res.write(buffer);
            res.end();

            //console.log("success:" + buffer.toString());
        }
    });

});

// 监听，一直运行
server.listen(8080);