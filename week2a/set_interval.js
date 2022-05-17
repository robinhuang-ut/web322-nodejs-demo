var count = 1; // global counter
var maxCount = 5; // global maximum

var myCountInterval = setInterval(function () {
    console.log("Hello after " + (count++) + " second(s)");
    checkMaximum();
}, 1000);

var checkMaximum = function () {
    if (count > maxCount) {
        clearInterval(myCountInterval);
    }
}