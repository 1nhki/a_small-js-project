    const {EventEmitter} = require('events')
     
    const birthdayEventListener = (name) => {
        console.log(`Happy birthday ${name}!`);
      }
       
    MyEmitter = new EventEmitter()
    MyEmitter.on("birthday", birthdayEventListener)

    MyEmitter.emit("birthday", "fikri")
