const http = require('http');
const url = require("nodejs/nodelib/url");
const querystring = require("nodejs/nodelib/querystring");
const fs = require("fs");

let users = {};

// 数据接口：用户名+密码
/*
let users = {
    "username":"zhangsan",
    "password":"1234"
};
*/

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    // 接收数据
    console.log(req.method);

    let path = "", get = {}, post = {};

    if (req.method == "GET") {
        let {pathname, query} = url.parse(req.url, true);

        path = pathname;
        get = query;

        complete(req.method);
    } else if (req.method == "POST") {
        // 问题：现在全部写在内存里面，到时候上传数据就会爆了
        path = req.url;

        var arr = [];
        req.on("data", buffer => {
            arr.push(buffer);
        });

        req.on("end", () => {
            let buffer = Buffer.concat(arr);

            post = querystring.parse(buffer.toString());
            console.log(post);

            complete(req.method);
        });
    }

    //res.write("success");
    //res.end();

    function complete(method) {
        console.log("===>", path, get, post);
        let r = {};

        // router
        if (path == '/reg') {

            let {username, password} = data(method);


            if (users["username"]) {
                r = {error: 1, msg: '此用户已经存在'};

            } else {
                users["username"] = username;
                users["password"] = password;
                r = {error: 0, msg: 'success:' + users["username"] + "||" + users["password"]};
                console.log(users);
            }

            res.write(JSON.stringify(r));
            res.end();
        } else if (path == '/login') {

            let {username, password} = data(method);

            if (!users["username"]) {
                r = {error: 1, msg: '用户不存在'};
            } else if (users["password"] != password) {
                r = {error: 1, msg: '密码错误'};
            } else {
                r = {error: 0, msg: '登陆成功'};
            }

            res.write(JSON.stringify(r));
            res.end();
        } else {
            // 加载资源文件,一般有独立的服务器，上传资源
            let filePath;
            if (path == '/lib/jquery-3.4.1.min.js') {
                filePath = `../../${path}`;
            } else {
                filePath = `../www${path}`;
            }
            // file operation，中转要显示的html路径
            fs.readFile(filePath, (error, buffer) => {
                if (error) {
                    res.writeHeader(404);
                    r = {error: 1, msg: 'Not Found'};
                    res.write(JSON.stringify(r));
                    res.end();
                } else {
                    res.write(buffer);
                    res.end();
                }
            })

        }
    }

    function data(method) {
        if (method == "POST") {
            return post;
        } else {
            return get;
        }
    }

}).listen(8080);