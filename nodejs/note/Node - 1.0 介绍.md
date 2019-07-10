1. Node.js - 服务器端运行的js文件

2.后台不缺语言，node.js很难作为主力语言作为后台语言

3.node.js一般不会独立开发
用途
- 中间层(安全，性能，降低主服务器的复杂度)     客户端->中间层->服务器
- 小型服务（少）
- 工具类（多）

中间层是概念
中间件（库） 

4. node.js优势
- 便于前端入手
- 性能高
- 利于和前端代码的整合


5.node.js下载安装，卸载安装

> https://nodejs.org/zh-cn/

6.npm : Node package manager (Node包安装管理器)

npm直接下载慢，换到淘宝的,切换到国内下载地址

> http://npm.taobao.org/

使用命令,切换到`cnpm`
> npm install -g cnpm --registry=https://registry.npm.taobao.org

> npm = cnpm

7.命令

- 安装： npm install xxxx = npm i xxxx
- 删除： npm uninstall xxxx = npm un xxxx

-g:全局都可以使用，没有加-g，则只会在当前目录使用


8.怎么卸载低版本？
需要手动删除`node_modules`文件

9.通过node运行js

> node xx.js

10.包
 - 安装   cnpm i xxxx  => npm i multer
 - 引入                   const multer = require('multer')
 - 使用                   multer

exp

npm i multer ==》在当前目录下载生成`node_modules`文件

const multer = require('multer')