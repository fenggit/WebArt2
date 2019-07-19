const http = require('http');
const url = require("nodejs/nodelib/url");
const querystring = require("nodejs/nodelib/querystring");
const fs = require("fs");

http.createServer((req, res) => {
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

    res.write("success");
    res.end();

    function complete() {
        console.log("===>",path, get, post);
    }

}).listen(8080);