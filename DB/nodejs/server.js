const http = require('http');

const mysql = require('mysql');

// 1.连接数据库

let db = mysql.createConnection({
    host: 'loaclhost',
    user: 'root',
    password: '123456',
    port: 3306
    //database:''
});

db.query('select * form user_info', (error, data) => {
    if (error) {
        console.log("error", error);
    } else {
        console.log("data", data);
    }
});