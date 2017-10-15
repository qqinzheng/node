const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req,res) => {
    req.on('aborted',()=> {
        console.log('lalala');
    });

    req.on('close',()=> {
        console.log('已经被关闭了');
    });

    console.log(req.headers);

    console.log(req.httpVersion);

    console.log(req.method);

    console.log(req.rawHeaders);

    console.log(req.rawTrailers);

    console.log(req.url);

}).listen(8823);