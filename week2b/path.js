// const path = require('node:path');
const path = require('path');
const b1= path.basename('/foo/bar/baz/asdf/quux.html');
console.log(b1);
// Returns: 'quux.html'

const b2= path.basename('/foo/bar/baz/asdf/quux.html', '.html');
console.log(b2);
// Returns: 'quux'

// console.log(process.env.PATH);

const p = process.env.PATH.split(path.delimiter);
// console.log(p);

console.log(path.extname('index.html'));

console.log(path.dirname('/foo/bar/baz/asdf/quux'));