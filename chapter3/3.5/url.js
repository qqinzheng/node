var url = require('url');

var queryString = require('querystring');

var urlObj = url.parse('http://examples.burningbird.net:8124/?file=main&file=main2&type=check');

console.log(urlObj);

console.log(url.format(urlObj));

console.log(queryString.parse(urlObj.query));

console.log(queryString.stringify(queryString.parse(urlObj.query)));

