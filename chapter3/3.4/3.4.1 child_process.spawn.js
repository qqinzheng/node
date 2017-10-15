var spawn = require('child_process').spawn;
var pwd = spawn('pwd', ['-g']);

pwd.stdout.on('data',function(data) {
    console.log('stdout:' + data);
});


pwd.stderr.on('data',function (data) {
    console.log('stdout: ' + data);
});

pwd.on('exit',function(code) {
    console.log('child process exited with code ' + code);
});