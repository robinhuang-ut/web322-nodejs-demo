// output "A" after a random time between 0 & 3 seconds
function outputA(){
    var randomTime = Math.floor(Math.random() * 3000) + 1;

    return new Promise(function(resolve, reject){ // place our code inside a "Promise" function
        
        setTimeout(function(){
            console.log("-");
            reject("outputA rejected!"); // call "reject" because the function encountered an error
        },randomTime);

    });   
}

// call the outputA function and when it is "resolved" or "rejected, output a confirmation to the console

outputA()
.then(function(data){
    console.log(data);
})
.catch(function(reason){
    console.log(reason);
});