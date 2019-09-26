const fs = require('fs');

let rs = fs.createReadStream('a.txt');
// 将a.txt写到b.txt
let ws = fs.createWriteStream('a_copy.txt');

rs.pipe(ws);

rs.on("error", (err) => {
    console.log(err);
});


ws.on("finish", () => {
    console.log("finish");
});