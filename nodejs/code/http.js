// 引用系统http库
const http = require('http');

let server = http.createServer(()=>{ //有人来请求
    console.log("请求来了");
});

// 监听，一直运行
server.listen(8080);