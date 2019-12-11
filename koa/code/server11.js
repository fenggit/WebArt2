const Koa = require('koa');
const Router = require('koa-router');

let db = require('../libs/db');

let server = new Koa();
server.listen(8080);

server.context.db = db;

// 最前面，处理错误
server.use(async (ctx, next) => {
    // 统一处理错误
    try {
        await next();
    } catch (e) {
        ctx.body = "server error";
    }

});

// 所有路由出错，捕获
let router = new Router();
router.all('*', async (ctx, next) => {
    try {
        await next();
    } catch (e) {
        ctx.body = "router error";
    }
});

router.get('/a', async ctx => {
    ctx.body = "aaa";
});

server.use(async ctx => {
    // 捕获错误处理，很多的时候，很麻烦
    try {
        let data = await ctx.db.query("select * from user_info");
        ctx.body = data;
    } catch (e) {
        ctx.throw(500, "database error");
    }
});

server.use(router.routes());





