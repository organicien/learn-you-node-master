var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2],'utf-8').toString();
var nblines = buffer.split('\n');
console.log(nblines.length-1);
