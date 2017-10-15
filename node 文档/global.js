var path = require('path');

var util = require('util');

var fs = require('fs');



fs.readFile(path.join(__dirname,'..','chapter6','/6-1.js'),'utf-8',function(err,data) {
    console.log(data);
});

const readFile2 = util.promisify(fs.readFile);

readFile2(path.join(__dirname,'..','chapter6','/6-1.js'),'utf-8').then((data) => {
    console.log(data);
}).catch((e)=> console.log(e));


console.log(__dirname);

console.log(__filename);

console.log(path.dirname(__filename));

setImmediate(function() {
    console.log(arguments);
},1,2,3);