var http = require('http');

var path = require('path');

var fs = require('fs');

http.createServer(function(req,res) {
    pathname = __dirname + req.url;
    fs.access(pathname,fs.constants.R_OK,function(err) {
        if (!err) {
            res.setHeader('Content-Type','text/html');
            res.statusCode = 200;
            // 创建读取流
            var file = fs.createReadStream(pathname);

            file.on('open',function() {
                file.pipe(res);
            });
            file.on('error',function(err) {
                console.log(err);
            })
        } else {
            res.writeHead(404);
            res.write('Bad Request!');
            res.end();
        }
    });
}).listen(8124);

console.log('server running at 8124');