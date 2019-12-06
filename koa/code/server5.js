const Koa = require('koa');
const Router = require("koa-router");
const path = require("path");
const koaStatic = require("koa-static");

let server = new Koa();
server.listen(8080);

// 放到最后
server.use(koaStatic('./static', {
    // Cache-Control: max-age=86400
    maxage: 86400 * 1000,//缓存时间，1天，客户端缓存文件的时间
    index: 'my.html' //主页面，根文件，http://localhost:8080
}));


