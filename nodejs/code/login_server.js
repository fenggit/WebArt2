const http = require('http');
const url = require("url");
const querystring = require("querystring");
const fs = require("fs");

let users = {};

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    // 接收数据
    console.log(req.method);

    let path = "", get = {}, post = {};

    if (req.method == "GET") {
        let {pathname, query} = url.parse(req.url, true);

        path = pathname;
        get = query;

        complete();
    } else if (req.method == "POST") {
        path = req.url;

        var arr = [];
        req.on("data", buffer => {
            arr.push(buffer);
        });

        req.on("end", () => {
            let buffer = Buffer.concat(arr);

            post = querystring.parse(buffer.toString());
            console.log(post);

            complete();
        });
    }

    //res.write("success");
    //res.end();

    function complete() {
        console.log("===>", path, get, post);

        // router
        if (path == '/reg') {
            let {username, password} = get;

            let r;

            if (users['username']) {
                r = {error: 1, msg: '此用户已经存在'};

            } else {
                users['username'] = username;
                users['password'] = password;
                r = {error:0, msg: 'success:'+users['username']+"||"+users['password']};
            }

            res.write(JSON.stringify(r));
            res.end();

        } else if (path == '/login') {
            // 102
        } else {
            // file operation

        }
    }

}).listen(8080);