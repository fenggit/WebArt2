const db = require('../lib/database');

module.exports = async (res, get, post, files) => {
    let {title, price, count} = get;

    // 有问题的代码
    res.write(`insert into item_table(title, price, count) values('${title}','${price}','${count}')`);
    res.end();

    // 解决方法
    // 1.手动检验title, price, count数据内容，比较麻烦

    // TODO 安装数据库后，使用
    // 2.通过数据库的方式，直接将值插入到数据库，避免操作SQL
    // try {
    //     await db.query('insert into item_table(title, price, count) values(?,?,?)', [title, price, count])
    // } catch (e) {
    //     // 过滤不合法的数据
    //     console.log(e)
    // }
};