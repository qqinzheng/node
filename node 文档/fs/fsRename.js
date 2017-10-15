const fs = require('fs');
const path = require('path');

fs.rename(path.join(__dirname,'/message.txt'),path.join(__dirname,'/abc.txt'),(err,data) => {
    console.log(data);
});