const http = require('http');

const url = require('url');

const fs = require('fs');

const mysql = require('mysql');
const co = require('co-mysql');
// 自定义的模块
const invlidate = require('./libs/invlidate');

// 1.连接数据库
let conn = mysql.createPool({
    connectionLimit: 10, // 默认连接池是10个，可以不写
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'user'  // 数据库名
});
// 2. 建立异步的连接
let db = co(conn);

// 2.结合Http
http.createServer(async (req, res) => {
    const {pathname, query} = url.parse(req.url, true);
    console.log("pathname", pathname, "query", query);
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    let {username, password} = query;

    if (pathname == '/reg') {
        let err = invlidate.username(query.username);
        if (err) {
            res.write(err);
        } else {
            let e = invlidate.password(query.password);
            if (e) {
                res.write(e);
            } else {
                try {
                    // 1. 检查用户是否存在
                    // test exception
                    //let data = await db.query(`select ID from user_infoAAA where username = '${username}'`);
                    let data = await db.query(`select ID from user_info where username = '${username}'`);
                    if (data.length > 0) {
                        res.write("用户名被占用了");
                    } else {
                        await db.query(`insert into user_info (username,userpassword) values('${username}','${password}')`);
                        res.write("注册成功");
                    }
                } catch (e) {
                    res.write("数据库异常");
                }
                res.end();
            }
        }
    } else if (pathname == '/login') {
        let err = invlidate.username(query.username);
        if (err) {
            res.write(err);
        } else {
            try {
                // 1. 检查用户是否存在
                // test exception
                //let data = await db.query(`select ID from user_infoAAA where username = '${username}'`);
                let data = await db.query(`select ID,userpassword from user_info where username = '${username}' and userpassword='${password}'`);
                if (data.length == 0) {
                    res.write("用户名不存在");
                } else if (data[0].userpassword != password) {
                    console.log(data);
                    console.log(data[0].userpassword);
                    res.write("密码错误");
                } else {
                    res.write("登录成功:" + JSON.stringify(data));
                }
            } catch (e) {
                res.write("数据库异常");
            }
            res.end();
        }

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