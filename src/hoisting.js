function startProcess() {
    // Start a process that prints "waiting scanner" every second
    let scannerInterval = setInterval(() => {
        console.log("waiting scanner");
    }, 1000); // Repeat every 1 second

    // After 10 seconds, capture and stop the scanner
    setTimeout(() => {
        console.log("capturing thing"); // Capture the thing after 10 seconds
        clearInterval(scannerInterval); // Stop the "waiting scanner" loop
        
        // Restart the entire process
        startProcess(); 
    }, 10000); // Wait 10 seconds
}

function alamak(){
    let ulang = setInterval(() => {
        console.log("test")

    }, 1000)
}

// Start the loop

alamak()
