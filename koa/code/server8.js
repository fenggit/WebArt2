const Koa = require('koa');
const body = require("koa-better-body");

let server = new Koa();
server.listen(8080);


//cookie签名,保证客户端不可以随意更改
server.keys = ['asdsdasa', 'asddasdasdad', 'qweqwewqeqw'];

server.use(async ctx => {
    ctx.cookies.set('user', 'zhangsan', {
            maxAge: 86400 * 1000,
            signed: true
        }
    );
    //ctx.cookie.get();

    console.log(ctx.cookies.get('user'));
    ctx.body = "success:" + ctx.cookies.get('user', {
        signed: true //校验
    });
});



