const { unlink } = require('node:fs');
let p = 'test3.txt';
unlink(p, (err) => {
  if (err) throw err;
  console.log('successfully deleted '+ p);
});