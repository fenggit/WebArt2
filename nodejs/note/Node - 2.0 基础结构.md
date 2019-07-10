1. http

> ../code/server.js

> node server.js 

```node js
// 引用系统http库
const http = require('http');

let server = http.createServer((request,response)=>{ //有人来请求
    response.write("hello");
    response.end();// 结束
    console.log("请求来了");
});

// 监听，一直运行
server.listen(8080);
```

客户端通过浏览器访问地址

> http://localhost:8080/

2.文件操作

> fs

3. 服务器
- 响应数据
- 数据交互
- 数据库

4. HTTP协议
HTTP 1.0    RPC-1945
HTTP 1.1    RPC-2616 持久连接  30s
HTTPS       RFC-2818 安全协议
HTTP 2.0    RFC-7540 加密，头部压缩，服务器推送，管线操作，多路复用

- request data
    - Header <= 32k
    - Body   <= 2G 

- 状态码
1xx：信息，极少出现
2xx：成功
3xx：重定向 
4xx：请求错误
5xx：服务器错误

- 请求方式
GET：<=32k
POST


