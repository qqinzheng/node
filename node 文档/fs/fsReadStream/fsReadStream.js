var fs = require('fs');

fs.readFile('abc.js','utf-8',(err,data)=> {
    console.log(data);
});
