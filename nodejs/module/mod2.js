//mo1.js
//const mod1 = require("./mod1.js");
const mod1 = require("./mod1");

// 在特殊文件夹下面node_modules，不需要写./
const m0 = require("mod0");

console.log(mod1.a, mod1.b, mod1.c);

console.log(m0.a, m0.b, m0.c);

// invoke function
// m0();

let mm0 = new m0("zhangsan");
mm0.show();