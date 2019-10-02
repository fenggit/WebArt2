const db = require('../lib/database');

module.exports = async (res, get, post, files) => {
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
};