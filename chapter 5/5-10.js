var fs = require('fs');

var async = require('async');

var path = require('path');

console.log(process.cwd());
console.log(path.resolve('/data/data1.txt'));

try {
    async.waterfall([
        function readData(callback) {
            fs.readFile('chapter\ 5/data/data1.txt','utf-8',function(err,data) { //readFile是相对于process.cwd()来进行访问的,加斜杠是根路径,不加是相对路径
                callback(err,data);
            });
        },
        function modify(text,callback) {
            var adjdata = text.replace(/123/g,'qinzheng');
            callback(null,adjdata);
        },
        function writeData(text,callback) {
            fs.writeFile('chapter\ 5/data/data1.txt',text,function(err){
                callback(err,text);
            });
        }
    ],function(err,result) {
        if (err) throw err;
        console.log(result);
    })
} catch (e) {
    console.log(e.stack);
}