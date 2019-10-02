const db = require('./lib/database');
const http = require('./lib/http');

// 路由协议写在这里
const routers = require('./routers/index');

// console.log(config);
//
// (async () => {
//     let data = await db.query("select * from item_table");
//     console.log(data)
// })();


const process = require('process');
// > node server.js --dev
console.log(process.argv);




