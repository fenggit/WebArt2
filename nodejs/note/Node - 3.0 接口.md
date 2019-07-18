1. 接口 - API

exp：注册和登录

服务器：
- 请求文件 -> 结果
- 请求接口 -> 操作

2.登陆注册模块接口

> exp1
[后台API](../code/my_login_server.js)
[前端](../www/login.html)


> exp2（完整）
[后台API](../code/my_login_server.js)
[前端](../www/mylogin.html)

> 使用方法
 > node my_login_server.js
 > http://localhost:8080/mylogin.html


开启服务
> node account_server.js

注册接口
/reg?uername=xxx&password=xxx     get

登录接口
/login?uername=xxx&password=xxx   post


响应

error = 1 : 成功
error = 0 : 失败 

{
    error:1,
    msg:"错误信息
}

3. 完整的服务器
 - 处理文件，返回html，库
 - 处理接口
 - 存储数据