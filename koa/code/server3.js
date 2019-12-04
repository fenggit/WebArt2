const Koa = require('koa');
const Router = require("koa-router");

let server = new Koa();
server.listen(8080);

let router = new Router();

// /news?id=12
router.get('/news/', async (ctx, next) => {
    console.log(ctx.query);
    let {id} = ctx.query;
    ctx.body = "news 参数 ：" + id;
});

// 需要携带id参数,否则无法访问==>:id
router.get('/news/:id/', async (ctx, next) => {
    console.log(ctx.params);
    let {id} = ctx.params;
    ctx.body = "news 参数 ：" + id;

    // 继续走/news/1/,以后面的为准
    // await next();
});

// 和上面/news/:id/冲突
router.get('/news/1/', async (ctx, next) => {
    ctx.body = "news /news/1/ ";
});

// 携带2个参数的
router.get('/news/:id/:title/', async ctx => {
    console.log(ctx.params);
    let {id, title} = ctx.params;
    ctx.body = "news 参数 ：" + id + " || " + title;
});

server.use(router.routes());


