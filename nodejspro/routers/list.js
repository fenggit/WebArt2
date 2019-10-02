const db = require('../lib/database');

module.exports = async (res, get, post, files) => {
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
};