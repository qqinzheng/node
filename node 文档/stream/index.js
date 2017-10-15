const stream = require('stream');

const http = require('http');

const server = http.createServer((req,res) => {
    // req是http.IncomingMessage,是一个可读流
    // res是http.serverResponse 是一个可写流
    let body = '';
    req.setEncoding('utf8');

    // 如果监听了 'data' 事件，Readable streams 触发 'data' 事件
    req.on('data',(chunk) => {
        body += chunk;
    });

    req.on('end',() => {
        try {
            const data = JSON.parse(body);
            res.write(typeof data);
            res.end();
        } catch(e) {
            res.statusCode = 400;
            return res.end(`error:${e.message}`);
        }
    });
}).listen(8888);

