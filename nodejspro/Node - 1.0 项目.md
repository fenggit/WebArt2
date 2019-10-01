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

7. 安装依赖库
> npm i package.json

8. 注入问题
```js
// 测试代码注入的问题
router.addRouter('get', '/inject', async (res, get, post, files) => {
    let {title, price, count} = get;

    res.write(`insert into item_table(title, price, count) values('${title}','${price}','${count}')`);
    res.end();

});
```
这样直接操作数据库，会导致注入问题

a. 先看看
> http://localhost:8080/inject?title=shop&price=100&count=1
> node server.js

b.输入有问题的
> http://localhost:8080/inject?title=a'); delete from item_table; select (1&price=19&count=20

需要将下面字符encode
> a'); delete from item_table; select (1

结果如下
> a')%3B%20delete%20from%20item_table%3B%20select%20(1

最终浏览器访问
> http://localhost:8080/inject?title=a')%3B%20delete%20from%20item_table%3B%20select%20(1&price=19&count=20

后台SQL数据变成
> insert into item_table(title, price, count) values('a'); delete from item_table; select (1','19','20')

9. 解决方法
 ```js
// 解决方法
    // 1.手动检验title, price, count数据内容，比较麻烦

    // 2.通过数据库的方式，直接将值插入到数据库，避免操作SQL
    try {
        await db.query('insert into item_table(title, price, count) values(?,?,?)', [title, price, count])
    } catch (e) {
        // 过滤不合法的数据
        console.log(e)
    }
```