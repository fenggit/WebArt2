const http = require("http");

const net = require("net");


net.createServer(sock => {
    console.log("server connect");

    // 1次数据
    sock.once("data", function (buffer) {
        let str = buffer.toString();

        console.log(str);
        // 关闭
        sock.end();
    });

    sock.on("end", function () {
        console.log("disconnect");
    })

}).listen(8080);