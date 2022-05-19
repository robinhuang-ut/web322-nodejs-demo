var util = require('util');
var txt = 'Welcome %s to WEB%d';
var result = util.format(txt, 'Eric', 322);

console.log(result);

var result2 =util.format('%s:%s', 'foo', 'bar', 'baz');
console.log(result2);
// Returns: 'foo:bar baz'