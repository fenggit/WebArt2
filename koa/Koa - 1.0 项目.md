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
