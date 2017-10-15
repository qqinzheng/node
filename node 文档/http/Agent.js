const http = require('http');

const keepAliveAgent = new http.Agent({keepAlive: true,keepAliveMsecs: 1000,maxSockets: 10,maxFreeSockets: 256});

http.get('http://www.baidu.com',(res)=> {
   const { statusCode } = res;
   const contentType = res.headers['content-type'];

   res.on('data',(chunk) => {
       console.log(`响应主体: ${chunk}`);
   });

   res.on('finish',(chunk) => {
        console.log(chunk);
   });

});