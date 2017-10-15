const fs = require('fs');
console.log();
fs.mkdir('name',(err)=> {
    if (!err) console.log('创建文件成功');
});