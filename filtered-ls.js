var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2],function(err,data){
if (err)
console.log('err',err)
data.forEach(function(file){
    if (path.extname(file) === '.' + process.argv[3])
    console.log(file);
})
})