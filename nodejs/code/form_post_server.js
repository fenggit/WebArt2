// 引用系统http库
const http = require('http');

const queryString = require('querystring');

// client : http://localhost:8080/1.html
let server = http.createServer((req, res) => { //有人来请求
    console.log("请求来了==>" + req.url);
    console.log("method = "+req.method);
    // post 数据是分段传输的

    let arr = [];

    // 事件
    req.on("data", buffer => {
        // buffer 二进制数据
        //console.log(buffer);
        arr.push(buffer);
    });
    req.on("end", () => {
        let d = Buffer.concat(arr);
        // 如果是文件，则无法 toString
        console.log(d.toString());

        let post = queryString.parse(d.toString());
        console.log(post);
    });

    res.write("from server : success");
    res.end();

});

// 监听，一直运行
server.listen(8080);