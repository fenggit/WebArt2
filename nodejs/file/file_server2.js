const http = require("http");
const multiparty = require("multiparty");

http.createServer((req, res) => {
    let form = new multiparty.Form({
        uploadDir: "./upload"
    });

    form.parse(req);

    // 普通字段
    form.on("field", (name, value) => {
        console.log("字段：", name, value);
    });

    // 文件
    form.on("file", (name, file) => {
        // 文件名，会变，为了防止文件被覆盖
        console.log("文件：", name, file);

    });

    // 结束
    form.on("close", () => {
        console.log("关闭");

    })

}).listen(8080);
