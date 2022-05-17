// prints timestamp for every 1 second
setInterval((function() {
    console.log(Date.now());
}), 1000);

// stops the process after 4 seconds
setTimeout((function() {
    process.abort();
    // process.exit();
}), 4000);
