1. package.json使用

进入`packagejson`文件夹
> cd packagejson

> npm init

快速创建
> npm init -y

会生成在`packagejson`文件夹下面`package.json`
```js
{
  "name": "packagejson",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "felix",
  "license": "ISC"
}

```

2. nodejs库,npm包

> https://www.npmjs.com/

3. 安装npm包

> npm install koa
> npm i koa

-D:开发依赖，会在`package.json`文件中依赖,重点是devDependencies
> npm install koa -D

```js
{
  "name": "packagejson",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "felix",
  "license": "ISC",
  "devDependencies": {
    "koa": "^2.7.0"
  }
}
```

"koa": "^2.7.0"中^向上兼容可以兼容的版本

```js
"devDependencies": {
    "koa": "^2.7.0"
  }
```

4. 复制`package.json`文件到其他项目,使用命令安装依赖包,自动下载`package.json`中依赖包
> npm i

5.发布必须要`package.json`文件

-----包管理器-------------
6. install --save-dev和--save

7. yarn（facebook）和npm用法一样
npm = cnpm = yarn
全局安装，因为是工具
> npm i yarn -g

8. bower : 前端包管理，和npm用法一样
> npm i bower -g
用法
> bower i xxx
> bower i jquery

自动生成bower_components文件，引用包都在这个目录下面