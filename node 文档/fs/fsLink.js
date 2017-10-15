const fs = require('fs');
console.log(process.cwd());
fs.link('message.txt','sample2.txt',(err)=> {
    console.log('文件改名成功');
});
