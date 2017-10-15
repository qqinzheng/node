const http = require('http');

http.get('http://www.lianshang.com',(res) => {  
    const {statusCode} = res;
    const contentType = res.headers['content-type'];
    let error;
    if (statusCode !== 200) {
        error = new Error(`请求失败。\n状态码${statusCode}`);
    }

    if (error){
        console.error(error.message);
        // 消耗数据以释放内存
        res.resume();
        return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        try {
            console.log(rawData);
        } catch (e) {
            console.error(e.message);
        }
    });

}).on('error',(e) => {
    console.error(e.message);
});