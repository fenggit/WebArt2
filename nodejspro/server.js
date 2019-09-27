const process = require('process');

//sconsole.log(process);
//console.log(process.env);
console.log(process.env.OS);

let mode = (process.env.OS == "Windows_NT" ? 'dec' : 'prod');
console.log("mode=", mode);

if (process.env.NODE_ENV === 'production') {
    console.log('生产环境');
} else {
    console.log('非生产环境');
}