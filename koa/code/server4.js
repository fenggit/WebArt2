const Koa = require('koa');
const Router = require("koa-router");
const path = require("path");

let server = new Koa();
server.listen(8080);

// server.context : 可以设置全局数据
server.context.a = 12;

let router = new Router();

router.get('/a', async (ctx, next) => {
    console.log(ctx.a);
    ctx.body = ctx.a;
});


router.get('/login', async (ctx, next) => {
    if (!ctx.query.user) {
        // 到此结束来
        ctx.throw(400, 'user is required')
    }

    console.log(ctx.query.user);
    ctx.body = ctx.query.user;
});

router.get('/login2', async (ctx, next) => {
    ctx.assert(ctx.query.user, 400, 'user is required');
    // assert 等价于下面的
    /*if (!ctx.query.user) {
        // 到此结束来
        ctx.throw(400, 'user is required')
    }*/

    console.log(ctx.query.user);
    ctx.body = ctx.query.user;
});

// http://localhost:8080/redirect
router.get("/redirect", async ctx => {
    ctx.state = 200;
    // 重定向
    ctx.redirect("https://www.baidu.com/")
});

// 下载
router.get("/download", async ctx => {
    //ctx.attachment('./server.js');
    console.log(path.resolve(__dirname, "server.js"));

});

server.use(router.routes());


