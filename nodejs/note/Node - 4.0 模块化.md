1. 模块管理系统
- 如何定义一个模块？Node.js出现的时候，还没有ES6，所以是支持CMD
  
   CMD
   
   AMD
   
   ESM
   
- 定义模块:一个文件就是1个模块
   module
   exports
   require
   
2. 注意模块引用

如果是当前路径：./

> const mod1 = require("./mod1");

还可以建立`node_modules`特殊文件夹，这样就不用写`./`

3.  require / module / exports

> [demo](../node_modules/mod0.js)

require：
带有路径，则从路径下面寻找
如果没有路径，会去项目寻找`node_modules`文件夹，还是没有从系统`node_modules`文件夹下面寻找
   
exports:
导出单个
   
module：
批量导出,`module.exports`会覆盖上面的，以最后一次为准，一般只有1个

```js

exports.a = 12;
exports.b = 10;
// 这2行等价于下面

// 批量导出
module.exports = {
    a: 12,
    b: 5
};
```
