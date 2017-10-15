const http = require('http');

const server = http.createServer((req,res) => {
    res.end();
}).listen(1337);

server.on('checkContinue',(req,res) => { // 接收到一个带有 HTTP Expect: 100-continue 请求头的请求时触发

});

server.on('checkExpectation',(req,res) => {

});

server.on('clientError',(err,socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.on('close',()=> {
    console.log('服务器被关闭了哦,亲');
});

// 当收到新的请求时触发
server.on('request',(req,res)=> {
    console.log(req);
    console.log(res);
});
server.timeout = 15000;

server.setTimeout(130000,()=> {
    console.log('setTimeout success');
});

console.log(server.timeout); 


// setTimeout(function(){
//     server.close();
// },2000);

