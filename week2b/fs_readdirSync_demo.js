fs = require('fs');

files = fs.readdirSync(__dirname);
console.log('Current directory:', files);

console.log("this outputs later");