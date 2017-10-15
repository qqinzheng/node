const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

const MyEmitter2 = new MyEmitter();

// MyEmitter2.on('event',function() {
//     console.log('触发了一个事件');
// });


// 绑定的event事件是同步执行的,应该避免逻辑错误
MyEmitter2.on('event',function(a,b) {
    console.log(a,b,this); // this 指向构造函数MyEmitter
});
MyEmitter2.on('event',function() {
    console.log(123);
});

// MyEmitter2.on('error',function(e) {
//     console.log(e);
// })

process.on('uncaughtException',function(err) {
    console.error('有错误');
});

MyEmitter2.emit('event','a','b');

MyEmitter2.emit('error',new Error('whoops!'));

const myEmitter3 = new MyEmitter();

let m = 0;



myEmitter3.on('event',() => {
    console.log(++m);
});

myEmitter3.emit('event');