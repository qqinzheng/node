const EventEmitter = require('events');

var emitter = new EventEmitter();

function abc() {
    console.log('A');
}

emitter.once('newListener', (event,listener) => {
    if ('event' === event) {
        console.log(123);
        emitter.on('event',function(){
            console.log('B');
        });
    }1``
});

emitter.once('removeListener',(event,listener) => {
    if (event === 'event') {
        console.log(456);
    }
});

emitter.on('event',abc);

emitter.emit('event');

emitter.removeListener('event',abc);