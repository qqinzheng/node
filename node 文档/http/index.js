const http = require('http');

console.log(http.METHODS); // 返回当前http支持的方法列表

console.log(http.STATUS_CODES); 

console.log(http.globalAgent); // Agent 全局实例

const req = http.request({
    protocol: 'http:',
    hostname: 'www.lianshang.com',
    path: '/',
    method:'GET',
    headers: {
        'Content-Type': 'text/html'
    }
},(res)=> {
    console.log(`状态码${res.statusCode}`);
    console.log(`响应头:${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data',(chunk)=> { // 当接收到的数据很多时,会分成多次来进行传输
        console.log(`响应主体:${chunk}`);
    });

    res.on('end',()=>{
        console.log('响应中已无主体');
    })

});

req.on('error',(e) => {
    console.error(`请求遇到问题:${e.messae}`);
});


req.end();