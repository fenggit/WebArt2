// 文件读写
const fs = require("fs");

// fs.writeFile(path,data,callback);
// fs.readFile(path,callback);

// 在a.txt文件，写入aaa
/*fs.writeFile('./a.txt', "aaa", err => {
    if (err) {
        console.log("error:" + err);
    } else {
        console.log("success");
    }
});*/


fs.readFile("./a.txt", (error, data) => {
    if (error) {
        console.log("error:" + error);
    } else {
        // data：二进制数据
        //console.log("success:" + data);
        console.log("success:" + data.toString());
    }
});

