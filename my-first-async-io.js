var fs = require('fs');
fs.readFile(process.argv[2],'utf-8',function(err,data){
    if (err) {
        console.log('err',err) }
        else
var nblines = data.toString().split('\n');
console.log(nblines.length - 1);
});
