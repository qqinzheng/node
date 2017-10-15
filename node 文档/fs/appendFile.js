const fs = require('fs');
console.log(process.cwd());
fs.appendFile('message.txt','data to append',(err)=> {
    if (err) throw err;
    console.log('123');
});

