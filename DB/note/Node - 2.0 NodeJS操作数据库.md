1. nodejs操作数据库

2. 代码 - 单个连接只能1个，如果多个会卡顿在这儿
准备工作，安装mysql模块
> nmp i package.json
or
> npm i mysql

[后台API](../nodejs/server2.js)
[web](../nodejs/www/index.html)

> node server2.js
> http://localhost:8080/index.html

3. 连接变化的版 - 连接池
[后台API](../nodejs/server3.js)
[web](../nodejs/www/index.html)

4. 最终版：异步操作数据库的模块,不能独立使用,结合mysql模块使用，无法连接数据库的
 > co-mysql

可以结合async和await结合使用，否则是只是普通回调

命令：npm i co-mysql -D

[后台API](../nodejs/server4.js)
[web](../nodejs/www/index.html)