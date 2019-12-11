## koa 数据库

1. 安装
> npm i mysql co-mysql -D
 
 
2. 数据库服务
 > node server11.js
 
3. 错误处理
 ```js
// 最前面，处理错误
server.use(async (ctx, next) => {
    // 统一处理错误
    try {
        await next();
    } catch (e) {
        ctx.throw(500, "database error");
    }

});
```

4. 所有路由出错，捕获
```js

let router = new Router();
router.all('*', async (ctx, next) => {
    try {
        await next();
    } catch (e) {
        ctx.body = "router error";
    }
});
```