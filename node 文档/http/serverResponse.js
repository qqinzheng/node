const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req,res) => {
    req.on('aborted',() => {
        console.log(`请求已被客户端终止时触发`)
    })

    res.on('close',()=> {
        console.log('当前连接即将被关闭');
    })

    res.on('finish',()=> {
        console.log('响应头以及响应主题已经交由操作系统进行网络传输时触发');
    })

    // console.log(res.connection);
    console.log(res.finished);
    
    res.addTrailers({'Content-MD5':'7895bf4b8828b55ceaf47747b4bca667'});

    fs.readFile(path.join(__dirname,'abc.png'),'binary',(err,file) => {
        //res.setHeader('Set-Cookie',['type=ninja', 'language=javascript']);
        res.statusMessage = 'lalalaWoshiqinzheng';
        res.statusCode = 400;
        res.writeHead(200,'q',{'Content-Type':'image/png','Trailer': 'Content-MD5'});

        //console.log('响应头',res.getHeader('Content-Type'));
        res.writeContinue();
        res.write(file,'binary');
        res.end(()=> {
            console.log('响应已经全部结束了');
        }); // res.end('anything') === res.write('anything','utf-8')
    })

    setTimeout(()=> {
        console.log(res.finished);
    },2000);

}).listen(8822);