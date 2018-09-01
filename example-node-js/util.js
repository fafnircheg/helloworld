var events = require('events');
var util = require('util');

var Cars = function(model) {
  this.model = model;
};

util.inherits(Cars, events.EventEmitter);

var bmw = new Cars('bmw');
var audi = new Cars('audi');
var citroen = new Cars('citroen');

var cars = [bmw, audi, citroen];
cars.forEach(function(car) {
  car.on('speed', function(text) {
    console.log(car.model + " speed is - " + text);
  });
});

bmw.emit('speed', '100 km/h');
