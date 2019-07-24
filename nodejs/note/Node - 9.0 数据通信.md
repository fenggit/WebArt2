1. 数据通信

- ajax原生写法

ajax：跨域，是**浏览器**阻止不同域名的请求，主要为了安全性
[](../ajax/ajax.js)
[](../ajax/ajax.html)

ajax将请求给浏览器，浏览器再去请求服务器；

浏览器在接收数据后，判断是不是在同一个域名下，如果不是，则不给ajax。

服务器响应的时候，声明给浏览器，让浏览器返回给ajax。

访问console会报错
```
Failed to load http://localhost:8080/a: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:63342' is therefore not allowed access.
```

解决方法是服务器设置header
```
    // 设置ajax所有的允许跨域
    res.setHeader("Access-Control-Allow-Origin","*");
```

- fetch ：原生的，用于替代ajax的XMLHttpRequest，好处不用引入新的库

普通文本数据
[](../fetch/fetch.html)

支持文本，json，二进制数据（图片，视频，音频）

处理二进制数据
[](../fetch/fetch_blob.html)

- jsonP：越用越少，不安全，当年ajax无法跨域，才火的
<script src="">


- jQuery方式ajax





- Ajax2.0 ->Formdata：直接提交表单

- Websocket


2. 数据库

3. 框架