let http = require("http");

let multiparty = require("multiparty");

http.createServer((req, res) => {

    var form = new multiparty.Form({
        uploadDir: 'upload'
    });

    form.parse(req);

    form.on("field", (name, value) => {
        console.log("field:", name, value);
    });

    form.on("file", (name, file) => {
        console.log("file:", name, file);

    });

    form.on("close", () => {
        console.log("close");
    });


}).listen(8080);