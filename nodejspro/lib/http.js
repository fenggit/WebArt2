const http = require('http'); // 开启服务
const url = require('url'); // url中数据解析
const queryString = require('querystring'); // 只能处理普通post数据
const zlib = require('zlib'); // 数据压缩
const fs = require('fs');  // 文件
const router = require('./router');
const {From} = require('multiparty');
const {HTTP_PORT, HTTP_ROOT, HTTP_UPLOAD} = require('../config'); // 配置文件index.js

// 启动服务
http.createServer((req, res) => {
    /**
     * 提供写json数据的函数
     * @param json
     */
    res.writeJson = function (json) {
        res.setHeader("content-type", "application/json");
        res.write(JSON.stringify(json));
    };


    // 1. 解析数据
    let {pathname, query} = url.parse(req.url, true);
    if (req.method == 'POST') {
        // post 分form-data 和 from-urlencoded 传输数据
        if (req.headers['content.type'].startsWith('application/x-www-form-urlencoded')) {
            // 普通post，就是字符串，文本数据
            let arr = [];
            req.on('data', buffer => {
                arr.push(buffer);
            });

            req.on('end', () => {
                let post = queryString.parse(Buffer.concat(arr).toString());

                // 2. 路由分发
                handle(req.method, pathname, query, post, {});
            })

        } else {
            // 文件post
            let form = new From({
                uploadDir: HTTP_UPLOAD
            });
            form.parse(req);

            // post字符数据
            let pos = {};
            // 文件数据
            let files = {};

            // key value
            form.on(`field`, (name, value) => {
                pos[name] = pos[value];
            });

            // file
            form.on('file', (name, file) => {
                files[name] = file;
            });

            // 捕获异常
            form.on('error', error => {
                console.log(error)
            });

            // 文件上传结束
            form.on('close', () => {
                // 2. 路由分发
                handle(req.method, pathname, query, pos, files);
            });
        }
    } else {
        // 2. 路由分发
        handle(req.method, pathname, query, {}, {});
    }

    /**
     *
     * @param method 请求的方式：get / post
     * @param url 链接
     * @param get url上面的参数
     * @param post post数据
     * @param files post的文件数据
     */
    async function handle(method, url, get, post, files) {
        let fn = router.findRouter(method, url);
        if (!fn) {
            // 路由不存在，则认为是文件存储
            let filename = HTTP_ROOT + pathname;
            fs.stat(filename, (err, stat) => {
                if (err) {
                    res.writeHead(404);
                    res.write("Not Found");
                    res.end();
                } else {
                    let rs = fs.createReadStream(filename);
                    rs.on("error", error => {
                        console.log("Error:" + error);
                    });
                    /*setTimeout(() => {
                        rs.close(); // 这可能不会关闭流。
                        // 人工标记流的结束，就像底层的资源自身已表明文件的结束一样，允许流进行关闭。
                        // 这不会取消挂起中的读取操作，如果存在此类操作，则过程可能仍无法成功地退出，直到完成。
                        rs.push(null);
                        rs.read(0);
                    }, 1000);*/

                    let gz = zlib.createGzip();
                    res.setHeader('content-encoding', 'gzip');
                    rs.pipe(gz).pipe(res);
                }
            });
        } else {
            // 接口
            try {
                // 对应server里面的js，addRouter函数里面的function
                await fn(res, get, post, files);
            } catch (e) {
                // 服务器出错
                res.writeHead(500);
                res.write("Internal Server Error");
                res.end();
            }
        }
    }

}).listen(HTTP_PORT);

console.log(`server stared at ${HTTP_PORT}`);