1. 查看环境变量配置库：process
通过process.env里面的参数来判断是什么环境
[查看环境](process.js)

2. 运行加上配置
> node server.js --dev

```js
const process = require('process');
// > node server.js --dev
console.log(process.argv);
```

这种运行麻烦，可以配置package.json，配置

[配置启动](./package.json)

```js
 "scripts": {
    "dev": "node server.js --dev",
    "build": "node server.js --build"
  }
```

> npm run dev
> npm run build

> npm run dev  相当于 > node server.js --dev
> npm run build 相当于 > node server.js --build