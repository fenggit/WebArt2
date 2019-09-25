const http = require('http');

const mysql = require('mysql');

// 1.连接数据库
let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'user' // 数据库名字
});

// 2. 查询
// db.query('SELECT * FROM user_info', (error, data) => {
//     if (error) {
//         console.log("select error", error);
//     } else {
//         console.log("select data==>", JSON.stringify(data));
//     }
// });

//3. 插入数据，user_info：表的名字
let username = "jack";
let pwd = "1234";
db.query(`insert into user_info(username,userpassword) values('${username}','${pwd}')`, (error, data) => {
    if (error) {
        console.log("insert error", error);
    } else {
        console.log("insert data==>", JSON.stringify(data));
    }
});