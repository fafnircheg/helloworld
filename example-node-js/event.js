var events = require('events');

var myEmit = new events.EventEmitter();

myEmit.on('some_event', function(txt) {
  console.log(txt);
});

myEmit.emit('some_event', 'Обработчик событий сработал');
