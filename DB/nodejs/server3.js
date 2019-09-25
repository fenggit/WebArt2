const http = require('http');

const url = require('url');

const fs = require('fs');

const mysql = require('mysql');

// 1.连接数据库
let db = mysql.createPool({
    connectionLimit:10, // 默认连接池是10个，可以不写
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'user'  // 数据库名
});

// 2.结合Http
http.createServer((req, res) => {
    const {pathname, query} = url.parse(req.url, true);
    console.log("pathname", pathname, "query", query);
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    let {username, password} = query;

    if (pathname == '/reg') {
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
                    res.write("查询用户数据库异常");
                    res.end();
                } else if (data.length > 0) {
                    res.write("用户名被占用了");
                    res.end();
                } else {
                    db.query(`insert into user_info (username,userpassword) values('${username}','${password}')`, (err, data) => {
                        if (err) {
                            res.write("注册失败");
                            res.end();
                        } else {
                            res.write("注册成功");
                            res.end();
                        }
                    });
                }
            });
        }
    } else if (pathname == '/login') {
        db.query(`select ID from user_info where username = '${username}' and userpassword='${password}'`, (err, data) => {
            if (err) {
                console.log("登录失败:" + err);
                res.write("登录失败");
                res.end();
            } else if (data.length > 0) {
                console.log("登录成功:" + JSON.stringify(data));
                res.write("登录成功:" + JSON.stringify(data));
                res.end();
            }else{
                console.log("用户名或密码错误");
                res.write("用户名或密码错误");
                res.end();
            }
        })

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