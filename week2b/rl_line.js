const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });
rl.on('line', (input) => {
    console.log(`Received: ${input}`);
  });