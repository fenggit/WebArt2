const Koa = require('koa');
const Session = require("koa-session");

let server = new Koa();
server.listen(8080);


//session必须要签名,保证客户端不可以随意更改
server.keys = ['asdsdasa', 'asddasdasdad', 'qweqwewqeqw'];

server.use(Session({
    maxAge: 20 * 60 * 1000, // 20分钟
    renew: true //自动续期，使用的时候有效期往后延
}, server));


server.use(async ctx => {
    if (!ctx.session['view']) {
        ctx.session['view'] = 0;
    }
    ctx.session['view']++;
    // 客户端查看存储的session数据

    ctx.body = `欢迎你第${ctx.session['view']}次访问`
});



