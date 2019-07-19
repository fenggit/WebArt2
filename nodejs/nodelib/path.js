const path = require("nodejs/nodelib/path");

let str = "/root/a/b/1.txt";

//  ==> /root/a/b
console.log(path.dirname(str));
console.log(path.extname(str));
console.log(path.basename(str));


// /root/a/b
// ../c
// /root/a/c
console.log(path.resolve("/root/a/b", "../c"));

// 打印出`path.js`的绝对路径
// __dirname :魔术变量，不同地方，值不一样
console.log(path.resolve(__dirname, "path.js"));