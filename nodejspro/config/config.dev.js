const path = require('path');

module.exports = {
    // database
    DB_HOST: 'localhost',
    DB_PORT: '3306',
    DB_USER: 'root',
    DB_PASS: '123456',
    DB_NAME: 'user',

    // http
    HTTP_PORT: 8080,
    HTTP_ROOT: path.resolve(__dirname, '../static/'), // 文件目录
    HTTP_UPLOAD: path.resolve(__dirname, '../static/upload/') // 上传文件目录
};