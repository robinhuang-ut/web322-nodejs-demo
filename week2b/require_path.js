const path = require("path");

console.log(`Current folder name is ${path.basename(__dirname)}`);

console.log(`Current directory name is ${path.dirname(__filename)}`);

console.log(`Current file name is ${path.basename(__filename)}`);
