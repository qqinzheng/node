var fs = require('fs');

var async = require('async');

var path = require('path');

function getDirName(file) {
    return path.join(__dirname,'/data3/',file);
}

try {
    async.parallel({
        data1: function(callback) {
            fs.readFile(getDirName('aaa.txt'),'utf-8',function(err,data) {
                callback(err,data);
            });
        },
        data2: function(callback) {
            fs.readFile(getDirName('bbb.txt'),'utf-8',function(err,data) {
                callback(err,data);
            });
        },
        data3: function readData(callback){
            fs.readFile(getDirName('ccc.txt'),'utf8',function(err,data){
                callback(err,data);
            });
        }
    },function(err,result){
        if (err) throw err;
        console.log(result);
    })
} catch (e) {
    console.log(err);
}