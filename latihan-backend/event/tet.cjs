const EventEmitter = require('events');
const emitter = new EventEmitter();

function myFunction() {
  console.log("Function called through an event!");
}

emitter.on('myEvent', myFunction);  // Register the event listener

// Emit the event to call the function
emitter.emit('myEvent');

console.log("This runs before the event function executes.");
