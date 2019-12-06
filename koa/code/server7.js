const Koa = require('koa');
const body = require("koa-better-body");
const koaStatic = require("koa-static");

let server = new Koa();
server.listen(8080);


server.use(body({
    uploadDir: './static/upload'
}));


server.use(async ctx => {
    // 文件和post数据
    console.log(ctx.request.fields);

    //console.log(this.request.body); // if buffer or text
    //console.log(this.request.files); // if multipart or urlencoded
    //console.log(this.request.fields); // if json

    ctx.body = "success";
});

//server.use(koaStatic('./static'));


