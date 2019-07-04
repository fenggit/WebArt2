const path = require("path");

module.exports = {
    entry: 'model2/index.js',

    output: {
        path: path.resolve(_dirname),
        filename: './bundle.js'//输入文件名字，可以随便取
    }
};