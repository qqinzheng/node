var EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

const emitter = new MyEmitter();

emitter.on('event',function() {
    console.log('有一个事件被触发');
});

emitter.emit('event');