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

router.get('/', async ctx => {
    ctx.body = "see ： http://localhost:8080/user/company/a \n http://localhost:8080/user/admin/a";
});


//  嵌套路由
//  /user
//      /company
//      /admin
// 访问地址：
// http://localhost:8080/user/company/a
// http://localhost:8080/user/admin/a

let userRouter = new Router();
let companyRouter = new Router();
companyRouter.get('/a', async ctx => {
    ctx.body = "company a";
});

let adminRouter = new Router();
adminRouter.get('/a', async ctx => {
    ctx.body = "admin a";
});

userRouter.use('/company', companyRouter.routes());
userRouter.use('/admin', adminRouter.routes());

let newsRouter = new Router();

router.use("/user", userRouter.routes());
router.use("/news", newsRouter.routes());

server.use(router.routes());
