const http = require('http');
const EventEmitter = require('events');

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// Define port for the server
const PORT = 3000;

// Event listener for 'requestReceived'
emitter.on('requestReceived', (req) => {
  console.log(`Request received: ${req.method} ${req.url}`);
});

// Event listener for 'sendResponse'
emitter.on('sendResponse', (res, message) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(message);
});

// Event listener for 'error'
emitter.on('error', (err, res) => {
  console.error('Error occurred:', err);
  res.writeHead(500, { 'Content-Type': 'text/plain' });
  res.end('Internal Server Error');
});

// Create the HTTP server
const server = http.createServer((req, res) => {
  try {
    emitter.emit('requestReceived', req);  // Emit request event

    // Example route handling
    if (req.url === '/') {
      emitter.emit('sendResponse', res, 'Welcome to the Home Page!');
    } 
    else if (req.url === '/mashil'){
      emitter.emit('sendResponse', res, "hilmi")
    }else if (req.url === '/about') {
      emitter.emit('sendResponse', res, 'About Us Page');
    } else {
      emitter.emit('sendResponse', res, '404: Page Not Found');
    }
  } catch (error) {
    emitter.emit('error', error, res);  // Emit error event
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
