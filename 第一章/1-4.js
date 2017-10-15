var http = require('http');

var options = {
    host: 'localhost',
    port: 8124,
    path: '/?file=secondary',
    method: 'GET'
}

var processPublicTimeline = function(err) {
    console.log('finish complete');
    console.log(i);
}

for (var i = 0; i < 1000; i++) {
    http.request(options,processPublicTimeline).end();
}

process.on('uncaughtException', err => {  });