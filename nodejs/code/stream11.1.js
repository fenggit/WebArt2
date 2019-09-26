const fs = require('fs');
const zlib =require('zlib');

let rs = fs.createReadStream('a.txt');

// 将a.txt写到b.txt
let ws = fs.createWriteStream('a_copy.txt.gz');

// 压缩
let gz = zlib.createGzip();

rs.pipe(gz).pipe(ws);

//rs.pipe(ws);

rs.on("error", (err) => {
    console.log(err);
});


ws.on("finish", () => {
    console.log("finish");
});