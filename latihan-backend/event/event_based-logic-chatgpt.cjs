const EventEmitter = require('events');
const emitter = new EventEmitter();

// Function to simulate file download progress
function startDownload() {
  console.log("Download started...");
  
  setTimeout(() => emitter.emit('progress', 30), 1000);  // 30% after 1s
  setTimeout(() => emitter.emit('progress', 70), 2000);  // 70% after 2s
  setTimeout(() => emitter.emit('complete'), 3000);      // Done after 3s
}

// Listener for 'progress' event
emitter.on('progress', (percentage) => {
  console.log(`Download Progress: ${percentage}%`);
});

// Listener for 'complete' event
emitter.on('complete', () => {
  console.log("Download complete!");
});

// Trigger the download
startDownload();

