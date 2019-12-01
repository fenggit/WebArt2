const koa = require('koa');
const Router = require("koa-router");

let server = new koa();

server.listen(8080);

let router = new Router();

/*router.get('/a', async (ctx, next) => {
    // ctx:上下文  ctx.req ctx.res
    // next：

});*/

router.get('/a', async ctx => {
    // ctx:上下文  ctx.req ctx.res
    ctx.body = "success";
    ctx.body += "ok";

});

server.use(router.routes());