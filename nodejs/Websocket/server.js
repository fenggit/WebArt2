const http = require("http");
const io = require("socket.io");


//1.建立普通Http
let server = http.createServer((req, res) => {

});
server.listen(8080);

//2. 建立websocket
let ws = io.listen(server);
ws.on("connection", sock => {
    console.log("server ==> connection");

    // sock.emit 发送数据
    // sock.on 接收数据

    // 这个传递的参数a和client匹配
    sock.on("a", function (a, b) {
        console.log("a===>", a, b, (a + b));
    });

    // 服务器每隔1000，发送给客户端时间戳
    setInterval(function () {
        sock.emit('timer', new Date().getTime());
    }, 1000)
});