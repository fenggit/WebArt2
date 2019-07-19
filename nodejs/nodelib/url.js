const url = require("nodejs/nodelib/url");

let str = "http://www.bing.com:8080/a/b/1.html?id=12&value=5";

// id会被拼接成数组
//str = "http://www.bing.com:8080/a/b/1.html?id=12&id=10&id=9";

console.log(url.parse(str));

//解析query，key
console.log(url.parse(str, true));

// 打印url中的value值
console.log(url.parse(str, true).query.value);