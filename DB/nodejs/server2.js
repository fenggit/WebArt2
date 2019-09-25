const http = require('http');

const url = require('url');

const fs = require('fs');

const mysql = require('mysql');

// 1.连接数据库
let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'user'
});

// 2.结合Http
http.createServer((req, res) => {
    const {pathname, query} = url.parse(req.url, true);
    console.log("pathname", pathname, "query", query);


    if (pathname == '/reg') {
        let {username, password} = query;

        if (!username || !password) {
            res.write("用户名和密码不能为空");
            res.end();
        } else if (username.length > 32) {
            res.write("用户名最多32字符");
            res.end();
        } else if (password.length > 32) {
            res.write("密码最多32字符");
            res.end();

        } else {
            // 1. 检查用户是否存在
            db.query(`select ID from user_info where username = '${username}'`, (err, data) => {
                if (err) {
                    res.write("查询用户数据库异常：");
                    res.write(err);
                    res.end();
                } else if (data.length > 0) {
                    res.write("用户名被占用了");
                    res.write(JSON.stringify(data));
                    res.end();
                } else {
                    data.query(`insert into user_info(username,userpassword) values('${username}','${password}')`, (err, data) => {
                        if (err) {
                            res.write("注册失败：");
                            res.write(err);
                            res.end();
                        } else if (data.length > 0) {
                            res.write("注册成功");
                            res.write(JSON.stringify(data));
                            res.end();
                        }
                    });
                }
            });
        }
    } else if (pathname == '/login') {

    } else {
        fs.readFile('www' + pathname, (error, buffer) => {
            if (error) {
                console.log(error);
                res.writeHeader(404);
                res.write("Not Found");
            } else {
                res.write(buffer);
            }

            res.end();
        })
    }

}).listen(8080);