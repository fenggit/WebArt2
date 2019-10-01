const db = require('./lib/database');
const http = require('./lib/http');
const router = require('./lib/router');
// console.log(config);
//
// (async () => {
//     let data = await db.query("select * from item_table");
//     console.log(data)
// })();

router.addRouter('get', '/error', async (res, get, post, files) => {
    // 故意写错
    res.writeaa('error');
    res.end();
});

router.addRouter('get', '/user', async (res, get, post, files) => {
    res.write("example=>:http://localhost:8080/user?username=hefeng&password=123456");
    res.write("\n");
    res.write(get['username'] + " : " + get['password']);
    res.end();
});


router.addRouter('get', '/list', async (res, get, post, files) => {
    try {
        let data = db.query(`select *from item_table`);

        res.writeJson({
            error: 0,
            data: data
        });
    } catch (e) {
        res.writeJson({
            error: -1,
            data: 'list api : db error:' + e
        });
    }
    res.end();
});

router.addRouter('post', '/add', async (res, get, post, files) => {
    let {title, price, count} = post;

    if (!title || !price || !count) {
        res.writeJson({
            error: -1,
            data: 'params invalid '
        });
        res.end();
    } else {
        price = Number(price);
        count = Number(count);

        if (isNaN(price) || isNaN(count)) {
            res.writeJson({
                error: -1,
                data: 'params invalid '
            });
            res.end();
        } else {
            // 这个代码有，注入的风险
            //let data = db.query(`insert into item_table(title, price, count) values('${title}','${price}','${count}')`);
            //res.write(`insert into item_table(title, price, count) values('${title}','${price}','${count}')`)
            try {
                await db.query('insert into item_table(title, price, count) values(?,?,?)', [title, price, count])
                res.writeJson({
                    error: 0,
                    msg: 'success'
                })
            } catch (e) {
                // 过滤不合法的数据
                console.log(e);
                res.writeJson({
                    error: 0,
                    msg: 'db error:' + e
                })
            }
            res.end()
        }
    }
});

router.addRouter('get', '/delete', async (res, get, post, files) => {

});

// 测试代码注入的问题
router.addRouter('get', '/inject', async (res, get, post, files) => {
    let {title, price, count} = get;

    // 有问题的代码
    //res.write(`insert into item_table(title, price, count) values('${title}','${price}','${count}')`);
    //res.end();

    // 解决方法
    // 1.手动检验title, price, count数据内容，比较麻烦

    // 2.通过数据库的方式，直接将值插入到数据库，避免操作SQL
    try {
        await db.query('insert into item_table(title, price, count) values(?,?,?)', [title, price, count])
    } catch (e) {
        // 过滤不合法的数据
        console.log(e)
    }
});