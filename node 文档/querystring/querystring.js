const querystring = require('querystring');

const result = querystring.parse('https://www.baidu.com/a.html&name=qin&time=gei123&big=abc');

console.log(result);