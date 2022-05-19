var util = require('util');
var str_test = "Test is a test line";
util.debug(str_test); // "debug str_test";
 
var json_obj = {'name':'mike','age':26};
util.debug(json_obj); // "debug json_obj";
util.debug(JSON.stringify(json_obj)); // "debug stringify"

// NODE_DEBUG=run-app* node util_debug.js //bash