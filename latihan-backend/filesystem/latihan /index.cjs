

const fs = require('fs')
const path = require('path')

const read_file = fs.createReadStream(path.resolve(__dirname, "input.txt"), {
    highWaterMark: 15
})
const write_file = fs.createWriteStream(path.resolve(__dirname, "output.txt"))

read_file.on('readable', () => {
    try {
        write_file.write(`${read_file.read()}\n`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});

read_file.on("end", () => {
    write_file.end()
})