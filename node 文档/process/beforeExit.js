// process 表示当前执行的代码的进程,beforeExit只会在隐式结束进程时触发
const fs = require('fs');

const path = require('path');

fs.readFile(path.join(__dirname,'beforeExit.js'),'utf8',(err,data) => {
    console.log(data);
    process.exit(0);    
});

process.on('beforeExit',(exitCode) => {
    console.log('lalala',exitCode);
});

process.on('exit',(exitCode) => {
    console.log('iguess will trigger twice',exitCode);
});

// 在收到子进程的消息时
process.on('message',(message,sendHandle) => {

});


