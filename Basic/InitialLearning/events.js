const events = require('events'); //import module

//created object of event emitter
const eventEmitter = new events.EventEmitter(); 

var myFunc = function(data){
    console.log("Function called: ",data);
}

//event listen
eventEmitter.on('eventName',myFunc);

//event emits
eventEmitter.emit('eventName',"Mukul");