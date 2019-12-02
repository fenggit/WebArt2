const Router = require("koa-router");

let router = new Router();

// 模块化
router.use("/company", require('./company'));
router.use("/admin", require('./admin'));

module.exports = router.routes();