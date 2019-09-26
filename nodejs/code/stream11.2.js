const fs = require('fs');
const zlib = require('zlib');
const http = require('http');
const url = require('url');

http.createServer((req, res) => {

    let {pathname} = url.parse(req.url, true);

    let filePath = 'www' + pathname;

    // 检查文件的状态是否存在
    fs.stat(filePath, (err, stat) => {
        if (err) {
            // deflate：普通文件，buffer
            // res.setHeader('content-encoding', "deflate");
            // res.write(Buffer.from("Not Found"));

            res.writeHeader(404);
            res.write("Not Found");
            res.end();
        } else {
            let rs = fs.createReadStream(filePath);
            rs.on("error", err => {
                // 捕获异常，以免服务器崩溃了
            });
            res.setHeader('content-encoding', "gzip");
            let zip = zlib.createGzip();

            rs.pipe(zip).pipe(res);
        }
    });

}).listen(8080);