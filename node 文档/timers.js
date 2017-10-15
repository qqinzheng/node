var fs = require('fs');
var path = require('path');
var immediate = setImmediate(function() {
    console.log(arguments);
},1,2,3);

// clearImmediate(immediate);

fs.readFile(path.join(__dirname,'..','chapter6','/6-1.js'),'utf-8',function(err,data) {
    console.log(data);
})

var timer1 = setTimeout(function(){
    console.log(222);
},0);

var timer2 = setInterval(function(){
    console.log(new Date);
},0)

//  timer1.unref();

//  timer2.unref();

