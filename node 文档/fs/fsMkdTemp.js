const fs = require('fs');

const path = require('path');

console.log(path.sep);

fs.mkdtemp('/tmp/foo-',(err,folder)=> {
    if (err) throw err;
    console.log(folder);
});

const fd = fs.open(path.join(__dirname,'fsMkdri.js'),'r+',(err,fd) =>{
    const buffer = new Buffer(200);
    fs.read(fd,buffer,0,10,null,function(err, bytesRead, buffer2) {
        console.log(buffer2.toString());
    });
});

fs.readdir(__dirname,function(err,files) {
    for (var i = 0,j = files.length; i < j; i++) {
        fs.readFile(path.join(__dirname,files[i]),'utf-8',(err,data)=> { //readFile 如果读取的是一个文件夹的话。那么会报错
            if (err) return err;
            console.log(data);
        });
    }
});
