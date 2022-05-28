// output "A" after a random time between 0 & 3 seconds
function outputA(){

    var randomTime = Math.floor(Math.random() * 3000) + 1;

    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("A, takes ", randomTime);
            resolve("outputA() complete");
            return;
            console.log("will I still be executed?");
            reject("test to re-flag A to reject after resolve");
        },randomTime);
    });   
}

// output "B" after a random time between 0 & 3 seconds
function outputB(msg){
    // NOTE: msg holds the 'resolve' message from the 
    // previous function in the chain
    var randomTime = Math.floor(Math.random() * 3000) + 1;
    // undefined_function(); //ReferenceError get caught
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("B, takes ", randomTime);
            // undefined_function(); //ReferenceError didn't get caught
            resolve("outputB() complete");
        },randomTime);
    });   
}

// output "C" after a random time between 0 & 3 seconds
function outputC(msg){
    // NOTE: msg holds the 'resolve' message from the 
    // previous function in the chain
    var randomTime = Math.floor(Math.random() * 3000) + 1;

    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("C, takes ", randomTime);
            resolve("outputC() complete");
        },randomTime);
    });   
}

// invoke the functions in order

outputA()
.then(outputB)
.then(outputC)
.catch(function(rejectMsg){
    // catch any errors here
    console.log('rejectMsg',rejectMsg);
});