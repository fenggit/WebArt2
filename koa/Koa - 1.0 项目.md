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

这个/news/:id/和?id=12有什么区别？


