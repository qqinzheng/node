const fs = require('fs');

fs.stat(__dirname,function(err,stats) {
   console.log(stats.isFile());
   console.log(stats.isDirectory());
   console.log(stats.isBlockDevice());
   console.log(stats.isCharacterDevice());
});


fs.access('__dirname',fs.constants.R_OK | fs.constants.W_OK,(err) => {
    console.log(err);
});