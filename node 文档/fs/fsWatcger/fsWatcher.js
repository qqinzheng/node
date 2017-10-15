var fs = require('fs');

console.log(process.cwd());

var changeFile = fs.watch(__dirname,(eventType, filename) => {
    if (filename) {
        console.log(filename);
    }
});

changeFile.on('change',(err,name1,name2)=>{
    console.log(123);
});

changeFile.on('error',(error) => {
    console.log('一定是哪里发生了错误');
});

changeFile.close();