const http = require("http");
const bufferlib = require("./buffer.js");
const fs = require("fs");

http.createServer((req, res) => {
    //console.log(req.headers);

    //   'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary1X4ozNKJQjOqdJ3v',
    let boundary = "--" + req.headers["content-type"].split("; ")[1].split("=")[1];
    console.log("boundary: " + boundary);

    let arr = []; // 问题：文件特别大，服务器内存开销特别大

    req.on("data", buffer => {
        arr.push(buffer);
    });

    req.on("end", () => {
        let b = Buffer.concat(arr);

        // 为了看一下，所有数据
        //console.log(b.toString());

        // 1. 按照分隔符分割
        let res = bufferlib.bufferSplit(b, boundary);
        /*[
            null,
            data,
            data,
            '--'
        ]*/

        // 2.去除头尾数据
        res.pop();
        res.shift();

        // 3.处理每个数据
        res.forEach(buffer => {
            // 去除头尾的\r\n
            buffer = buffer.slice(2, buffer.length - 2);
            console.log(buffer.toString());

            let n = buffer.indexOf('\r\n\r\n');
            // 头部本来就是string
            let info = buffer.slice(0, n).toString();
            // 4是中间的'\r\n\r\n'
            let data = buffer.slice(n + 4);

            //console.log(info);
            //console.log(data.toString());

            //Content-Disposition: form-data; name="f1"; filename="a.txt"
            //Content-Type: text/plain
            if (info.indexOf("\r\n") != -1) {
                // 文件是2行
                // Content-Disposition: form-data; name="f1"; filename="a.txt"
                // Content-Type: text/plain

                let res2 = info.split("\r\n")[0].split("; ");

                let name = res2[1].split("=")[1];
                let filename = res2[2].split("=")[1];

                name = name.substring(1, name.length - 1);
                filename = filename.substring(1, filename.length - 1);

                console.log(name, filename);

                // 接收到来自客户端上传的文件
                fs.writeFile(`upload/${filename}`, data, error => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log("上传成功：" + `upload/${filename}` );
                    }
                });


            } else {
                //Content-Disposition: form-data; name="pwd"
                // 123456

                // 普通信息 name=xxx
                let name = info.split("; ")[1].split("=")[1];
                //console.log("name:", name);
                // 去除双引号
                name = name.substring(1, name.length - 1);
                console.log(name);
            }
            console.log(data.toString());
        })

    });

}).listen(8080);