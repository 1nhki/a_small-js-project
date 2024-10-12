const path = require('path')

const fs = require("fs")
const callback =  (error, data) => {
    if(error) {
        console.log("lol can get data")
        return;
    }
    console.log(data)
}

const alamak  = fs.readFile(path.resolve(__dirname, "notes.txt"), 'UTF-8', callback)
