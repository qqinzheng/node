const fs = require('fs');
const path = require('path');
console.log(process.cwd());
// fs.readlink(path.join(__dirname,'/message.txt'),'utf-8',(err,linkString)=> {
//     if (err) console.log(err);
//     console.log(linkString);
// });


fs.realpath(path.join(__dirname,'/message.txt'),'utf8',(err,resolvedPath) => {
    console.log(resolvedPath);
});