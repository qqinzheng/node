var spawn = require('child_process').spawn;

var find = spawn('find',['.','-ls']);

var grep = spawn('grep',['test']);

grep.stdout.setEncoding('utf8');

find.stdout.on('data',function(data) {
    grep.stdin.write(data);
});

grep.stdout.on('data',function(data) {
    console.log(data);
});