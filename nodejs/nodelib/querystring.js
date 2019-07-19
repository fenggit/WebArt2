const querystring = require("nodejs/nodelib/querystring");

// http://www.bing.com:8080/a/b/1.html?id=12&value=5
let str = "id=12&value=5";

// 1. 能解析url后面的参数
console.log(querystring.parse(str));

// 参数中的value值
console.log(querystring.parse(str).value);

// 2. 拼接参数
let json = {id: 12, value: 5};
console.log(querystring.stringify(json));
