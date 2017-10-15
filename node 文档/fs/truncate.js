const fs = require('fs');

const path = require('path');

fs.truncate(path.join(__dirname,'message.txt'),100,(err,data)=> {
    if (err) console.log(error);
    console.log(data);
});

fs.unlink(path.join(__dirname,'message.txt'),(err,data) => {
    console.log(err);
    console.log(data);
});