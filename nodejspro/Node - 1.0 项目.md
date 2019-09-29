1. 查看环境变量配置库：process
通过process.env里面的参数来判断是什么环境
[查看环境](process.js)

2. 设置配置环境，测试和线上的
[](./config/config.dev.js)
[](./config/config.prod.js)

3. lib 公用js
[数据库](./lib/database.js)

4. 展开对象“...对象”
```javascript
let json = {a:12,b:10}
let json2 = {...json,c:13}

// json2 等价于 json3
let json3 = { a:12,b:10,c:13}

```