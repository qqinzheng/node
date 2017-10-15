const http = require('http');
const fs = require('fs');
const path = require('path');

const clientRequest = http.get('http://www.lianshang.com',(res) => {
    const {statusCode} = res;
    const headers = res.headers;
    res.setEncoding('utf8');
    let responseData = '';
    res.on('data',(chunk) => {
        responseData += chunk;
        // console.log(`响应主体:${chunk}`);
    });
    res.on('end',()=> {
        try {
           var imgReg = /<img[^>]+data-src="([^">]+)"/gi;
           var srcReg = /data-src=[\'\"]?([^\'\"]*)[\'\"]?/i;
           var imgArr = responseData.match(imgReg);
           for (var i = 0,j= imgArr.length; i < j; i++) {
               var src = imgArr[i].match(srcReg);
               if (!src) {
                   continue;
               }
               var thisSrc = src[1];
               let baseName = path.parse(thisSrc).base;
               if (baseName.indexOf('?v') !==-1) {
                   baseName = baseName.split('?v')[0];
               }
               http.get('http:' + thisSrc,(res)=> {
                   createDirectory('img');
                   let imgData = '';
                   res.setEncoding('binary');
                   res.on('data',(chunk)=> {
                        imgData += chunk;
                   });
                   res.on('end',()=> {
                    fs.open(path.join(__dirname,'tmp'),(err) => {
                        if (err) {
                            console.log();
                        }
                    });
                    fs.writeFile(path.join(__dirname,'img',baseName),imgData,'binary',(err) => {
                        if (err) throw err;
                        console.log('The file has been saved');
                    })
                   });
               });
           }
           
        } catch(e) {
            console.error(e.message);
        }
        console.log('响应中已经没有数据');
    });
    if (statusCode == 200) {

    }
    // clientRequest.abort();
});

clientRequest.on('error',(e)=> {
    console.log(`请求遇到问题:${e.message}`);
});

clientRequest.on('aborted',()=> {
    console.log('已经被aborted了');
});

clientRequest.on('abort',()=> {
    console.log('已经被abort了');
});
console.log(process.cwd());
function createDirectory(directoryPath) {
    fs.stat(path.join(__dirname,directoryPath),(err,stats) => {
        if (err) {
            console.log('Folder does not Exist');
            return fs.mkdir(path.join(__dirname,directoryPath));
        }
        if (!stats.isDirectory()) {
            console.error('tmp不是一个文件夹');
        } else {
        }
    })
}
