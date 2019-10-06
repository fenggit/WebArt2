## Express

1. 命令，安装express
> npm init -y

> npm i express -D

2. express 
 - 自带路由
 
 - 支持next
 
 3. 支持的函数
 
 // url 是指路由，比如：/a ， /b
 get(url,fn()) : get
 post(url,fn()): post
 use(url,fn()): 支持任何方式，get，post。。。 
 
 // 没有带url，则所有get，post，都经过下面的函数
  get(fn()) : get
  post(fn()): post
  use(fn()): 支持任何方式，get，post。。。 
  
  
> http://localhost:8080/a
> http://localhost:8080/b

> node server.js

[code](./code/server.js)


4. 中间件
传输文件 
[code](./code/server2.js)

> http://localhost:8080/a
> http://localhost:8080/b
> http://localhost:8080/index.html

注意：
```js
// 设置静态文件，放在最后，避免这里面有文件和接口名字一样
server.use(express.static('./static/'));

```

5. 获取请求数据
[code](./code/server3.js)

get :

> http://localhost:8080/a?name=zhangsan&age=10
> node server3.js

post
> http://localhost:8080/reg
> 数据传输的是：x-www-form-urlencoded

或者
> http://localhost:8080/post.html

> node server3.js

数据

GET         req.query   (express 自带的解析)

POST        body-parser (中间件)

需要安装lib
> npm i body-parser -D



