1. 查看环境变量配置库：process
通过process.env里面的参数来判断是什么环境
[查看环境](process.js)

2. 展开对象“...对象”
```javascript
let json = {a:12,b:10}
let json2 = {...json,c:13}

// json2 等价于 json3
let json3 = { a:12,b:10,c:13}

```

3. 设置配置环境，测试和线上的
[测试环境](./config/config.dev.js)
[正式环境](./config/config.prod.js)

4. lib 公用js

[环境配置](./config/index.js)

[数据库](./lib/database.js)

[路由](./lib/router.js)


5. 项目
[主服务](./server.js)
[主页面](./static/index.html)

6. 安装调试工具 : inspector

> https://blog.csdn.net/u010476739/article/details/80159126