1. 流操作：连续的
[code](../code/stream11.0.js)

2. 读写流：压缩，加密
> node stream11.1.js
[压缩文件](../code/stream11.1.js)

文本压缩率比较高

3. 服务器数据压缩
> http://localhost:8080/a.txt
> node stream11.2.js
[服务器压缩文件](../code/stream11.2.js)

启动
> http://localhost:8080/a.txt

需要告诉请求端
> res.setHeader('content-encoding', "gzip");

4. 启动器：forever

安装
> npm i forever -g

启动后，可以关闭终端
> forever start stream11.1.js

查看启动的服务有哪些
> forever list

服务代码改了
> forever restart stream11.1.js

关闭服务
> forever stop stream11.1.js

关闭所有的服务
> forever stopall

显示log日志和错误日志
> forever stop stream11.1.js -l c:/a.log -e c:/err.log -a

