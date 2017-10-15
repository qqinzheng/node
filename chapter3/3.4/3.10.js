const {execFile} = require ('child_process');

execFile('./3.10.js',(err,stdout,stderr) => {
    console.log(`stdout: ${stdout}`);
});