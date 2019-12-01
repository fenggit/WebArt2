const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

// start server
let server = express();
server.listen(8080);


let obj = new multer({
    dest: './static/upload' //文件上传的路径
});

//所有文件，可以设置任何文件
server.use(obj.any());

server.post('/upload', (req, res) => {
    // 上传的文件
    console.log(req.files);
    res.send("upload success"); //==res.write("aaa")+end，包含res.end()
    // 失效，已经end
    //res.write("aaa");
});

server.use(express.static('./static/'));