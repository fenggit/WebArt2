## koa

1. koa-static：静态网页，静态资源
> npm i koa-static -D

> node server5.js
> http://localhost:8080/index.html

2. 设置指定static文件的

> node server6.js

3. koa-better-body :解析post数据

地址
> https://www.npmjs.com/package/koa-better-body

> node server7.js

4. cookie操作，koa自带cookie的处理
> node server8.js

> http://localhost:8080/

在客户端查看cookie

5. session：koa不支持，需要：koa-session

6. koa-session：强制签名
> node server9.js

> http://localhost:8080/
> 客户端查看存储的session数据