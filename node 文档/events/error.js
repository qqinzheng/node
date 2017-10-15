const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();

// process.on('uncaughtException',function(err) { // 可以在process上绑定一个uncaughtException,来监听错误,防止node.js进程奔溃。
//     console.log(err);
// });

myEmitter.on('error',(err) => {
    console.error('有错误');
});

myEmitter.emit('error',new Error('whoops!')); // 如果没有对应的error监听器,则会抛出错误,打印堆栈跟踪,退出node.js进程。


// 最佳实践,应该始终为error事件注册监听器