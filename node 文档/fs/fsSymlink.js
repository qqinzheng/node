const fs = require('fs');
const path = require('path');
console.log(process.cwd());

fs.symlink(path.join(__dirname,'sample2.txt'),path.join(__dirname,'message.txt'),(err,data) => {
    console.log(err);
    console.log(data);
});