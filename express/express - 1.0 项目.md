## Express

1. 命令，安装express
> npm init -y
> npm i express -D


2. express 

 - 自带路由
 - 支持next，支持多级处理
 - 从上往下执行的
 
 传递参数，放在对象上面
 
 
3. 支持的函数
 
 // url 是指路由，比如：/a ， /b
 get(url,fn()) : get
 post(url,fn()): post
 use(url,fn()): 支持任何方式，get，post。。。 
 
 // 没有带url，所有get，post，都经过下面的函数
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

6. body-parser :用于处理post请求携带的数据，只能是数据传输的是：x-www-form-urlencoded

7. multer : 只能处理上传文件的库，无法处理post数据，一般结合body-parser一起使用
安装multer
> npm i multer -D

> http://localhost:8080/upload.html

> node server5.js

multer 专门给express使用的
multiparty 专门给原生用的

8. 总结
post：body-parser
文件：multer

9. 
- cookie ：存储在浏览器，请求服务器，发给服务器
    不安全，任何存在浏览器的数据，都是不安全的，通过服务器设置`signed`关键字签名来解决
    cookie的大小最多4k

- session：存储在服务端，不是独立存在的，基于cookie，在cookie里面存储id，解决cookie的不安全性
    安全问题：session劫持，获取别人的sessionId，盗用别人的id
    
- token：存储在cookie的sessionId就是token    

10. cookie-parser :解析cookie，可以对cookie签名
安装cookie-parser
> npm i cookie-parser -D

> http://localhost:8080/upload.html

> node server6.js

在前端，F12，调试模式 -> application ->cookie ->手动添加cookie数据-> 请求，服务器就能接收到cookie

11. cookie不能跨域

domain：设置为主域名，子域名可以访问

path： '/' 根目录
可以：/user --> /
不可以：/  --> /user