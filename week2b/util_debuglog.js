const util = require('util');
const debuglog = util.debuglog('foo'); //NODE_DEBUG environment variable set to foo

debuglog('hello from foo [%d]', 123);

// NODE_DEBUG=foo  node util_debuglog.js //mac