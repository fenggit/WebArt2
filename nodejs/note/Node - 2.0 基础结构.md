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

33：00
