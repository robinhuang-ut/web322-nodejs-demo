// console.log('process.env', process.env);

const { env } = require('node:process');

env.TEST = 1;
console.log('env.TEST:',env.TEST);
delete env.TEST;
console.log('env.TEST:',env.TEST);
// => undefined