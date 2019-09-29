const process = require('process');
// TODO 注意 ：mac 电脑，无法获取 ：process.env.OS

// 通过process.env里面的参数来判断是什么环境
let mode = (process.env.OS == "Windows_NT" ? 'dev' : 'prod');
console.log("mode=", mode);
console.log("process.env=", process.env);
