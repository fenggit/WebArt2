// 路由表
let router = {
    // exp:
    // get:{
    //     '/':function () {
    //
    //     },
    //     '/a':function () {
    //     }
    // },
    // post:{
    //     '/':function () {
    //
    //     }
    // }
};

function addRouter(method, url, fn) {
    method = method.toLowerCase();
    url = url.toLowerCase();

    // 如果没有则创建
    router[method] = router[method] || {};
    router[method][url] = fn;
}

function findRouter(method, url) {
    method = method.toLowerCase();
    url = url.toLowerCase();

    if (!router[method] || !router[method][url]) {
        return null;
    } else {
        return router[method][url];
    }
}

module.exports = {
    addRouter,
    findRouter
};