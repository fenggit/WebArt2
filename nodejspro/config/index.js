const process = require('process');
// TODO 注意 ：mac 电脑，无法获取 ：process.env.OS

let mode = (process.env.OS == "Windows_NT" ? 'dev' : 'prod');
console.log("mode=", mode);

module.exports = {
    mode,
    ...(mode == 'dev' ? require('./config.dev') : require('./config.prod')) //展开对象，返回的是json
};