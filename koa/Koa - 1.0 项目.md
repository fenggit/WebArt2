## koa

1. 使用

> npm init -y

安装
> npm i koa -D

> node server.js


2. express 自带路由，koa不带路由

3. koa的路由 : koa-router

> npm i koa-router -D

4. method

get：GET请求

post：POST请求

all：所有方法都可以
 
use : 只新增中间件的

5. koa将路由独立开，是为了可以嵌套路由
/user
    /company
    /admin

/news
    /sport
    /woman

> node server.js

>http://localhost:8080/user/company/a
>http://localhost:8080/user/admin/a

6. 升级版
server2.js

> node server2.js

>http://localhost:8080/user/company/a
>http://localhost:8080/user/admin/a

7. 路由参数

比如新闻,123是新闻的编号

> http://localhost:8080/news/123
> http://localhost:8080/news/121/标题

> node server3.js

特殊情况:/news/:id/ 和 /news/1/
> http://localhost:8080/news/1



8. 这个/news/:id/和news?id=12有什么区别？

urlencoded  http://www.asas.com/user?a=12&b=23
params      http://www.asas.com/uer/12/23

区别：

- urlencoded ：参数，顺序灵活，可省略的

- params：必须要的参数，利于SEO，静态的

9. 
ctx.params:获取参数
ctx.query: get数据参数部分
ctx.method：请求方法
ctx.url：请求的地址
ctx.request:原始的request
ctx.response：原始的response
ctx.path
ctx.ip：客户端的IP
ctx。headers：请求过来的头

10. server.context：想到于ctx的原型prototype
> node server4.js
> http://localhost:8080/a


11. ctx.throw(code,msg) :报错退出
> node server4.js

> http://localhost:8080/login
> http://localhost:8080/login?user=hefeng


ctx.assert(条件，code,msg) ==等价于 if(条件) { ctx.throw(code,msg) }
> node server4.js
> http://localhost:8080/login2?user=hefeng
> http://localhost:8080/login2


ctx.state:状态码=>ctx.state=200
ctx.redirect() :重定向
ctx.attachment():下载

>http://localhost:8080/redirect