process.on('exit', function(code) {
    // will setTimeout get executed?
    setTimeout(function() {
       console.log("will setTimeout run?");
    }, 0);
   
    console.log('Exiting with code:', code);
 });
 console.log("Process finishing");