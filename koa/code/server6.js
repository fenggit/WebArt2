const Koa = require('koa');
const Router = require("koa-router");
const path = require("path");
const koaStatic = require("koa-static");

let server = new Koa();
server.listen(8080);

let staticRouter = new Router();

// 1.图片缓存2个月
staticRouter.all(/(\.jpg|\.png|\.jepg\.gif)$/i, koaStatic('./static', {
    maxage: 60 * 86400 * 1000,//缓存2个月时间
}));

//2.css样式
staticRouter.all(/(\.css)$/i, koaStatic('./static', {
    maxage: 1 * 86400 * 1000,//缓存1天时间
}));

//3.html样式
staticRouter.all(/(\.html|\.htm|\.shtml)$/i, koaStatic('./static', {
    maxage: 2 * 86400 * 1000,//缓存20天时间
}));

//4. 其他文件
staticRouter.all('', koaStatic('./static', {
    maxage: 30 * 86400 * 1000,//缓存30天时间
}));

// 注意：routes()
server.use(staticRouter.routes());

