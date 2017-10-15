var fs = require('fs');

var path = require('path');

var async = require('async');

console.log(process.cwd());

var writeStream = fs.createWriteStream(path.join(__dirname,'/data2/log.txt'),{
    flags: 'a',
    defaultEncoding: 'utf8',
    mode: '0o666'
});

try {
    async.waterfall([
        function readDir(callback) {
            fs.readdir(path.join(__dirname,'/data2'),function(err,files){
                callback(err,files);
            });
        },
        function loopFiles(files,callback) {
            files.forEach(function(file) {
                return callback(null,file);
            });
        },
        function checkFile(file,callback) {
            fs.stat(path.join(__dirname,'/data2/',file),function(err,stats) {
                callback(err,stats,file);
            });
        },
        function readData(stats,file,callback) {
            if (stats.isFile()) {
                fs.readFile(path.join(__dirname,'/data2/',file),'utf8',function(err,data) {
                    callback(err,file,data);
                });
            }
        },
        function modify(file,data,callback) {
            var adjData = data.replace(/123/g,'qinzheng');
            callback(null,file,adjData);
        },
        function writeData(file,adjData,callback) {
            fs.writeFile(path.join(__dirname,'/data2/',file),adjData,function(err) {
                callback(err,file);
            });
        },
        function logChange(file,callback) {
            writeStream.write('changed ' + file + '\n','utf8',function(err) {
                callback(err,file);
            });
        }

    ],function(err,result) {
        if (err) throw err;
        console.log('modify ' + result);
    })
} catch (e) {
    console.log(e);
}