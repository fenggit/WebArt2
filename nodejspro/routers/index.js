const router = require('../lib/router');

// 每个router写成独立的模块
router.addRouter('get', '/list', require('../routers/list'));

router.addRouter('post', '/add', require('../routers/add'));

router.addRouter('get', '/delete', require('../routers/delete'));

// 测试代码注入的问题
router.addRouter('get', '/inject', require('../routers/inject'));

//==所有模块写成module
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