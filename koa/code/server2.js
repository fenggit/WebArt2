const koa = require('koa');
const Router = require("koa-router");

let server = new koa();

server.listen(8080);

let router = new Router();
//  嵌套路由
//  /user
//      /company
//      /admin
// 访问地址：
// http://localhost:8080/user/company/a
// http://localhost:8080/user/admin/a

router.get('/', async ctx => {
    ctx.body = "see ： http://localhost:8080/user/company/a \n http://localhost:8080/user/admin/a";
});
// 模块化
router.use('/user', require('./routers/user/index'));

server.use(router.routes());
