const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });
rl.on('history', (history) => {
    console.log(` Received: ${history}`);
  });