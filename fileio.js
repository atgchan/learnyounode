var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var str_split = str.split('\n');
console.log(str_split.length - 1);