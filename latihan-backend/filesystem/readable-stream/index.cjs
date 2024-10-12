    const fs = require('fs');
    const path = require('path')     
    const readableStream = fs.createReadStream("/home/inhki/js/latihan-backend/filesystem/readable-stream/article.txt", {
        highWaterMark: 10
    });
    
    readableStream.on('data', (chunk) => {
        process.stdout.write(`[${chunk}]`);
    });
    
    readableStream.on('end', () => {
        setTimeout(() => {
            console.log('Done');
        }, 1000); // Wait for 1 second before printing "Done"
    });
    // Listen for error events
readableStream.on('error', (err) => {
    console.error(`Error: ${err.message}`);
});