const url = require('url');

const thisurl = 'http://user:pass@sub.host.com:8080/p/a/t/h?query=string&abc=123#hash';

const afterParseUrl = url.parse(thisurl);

console.log(afterParseUrl);