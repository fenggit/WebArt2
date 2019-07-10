// 引用系统http库
const http = require('http');
// client : http://localhost:8080/1.html
let server = http.createServer((request,response)=>{ //有人来请求
    console.log("请求来了==>"+request.url);

    response.write("hello"); //写给客户端的数据
    response.end();// 结束
});

// 监听，一直运行
server.listen(8080);