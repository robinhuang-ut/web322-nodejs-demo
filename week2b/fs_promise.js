const { unlink } = require('node:fs/promises');

(async function(path) {
  try {
    // unlink(path); //what happens when we remove 'await'?
    await unlink(path);
    console.log(`successfully deleted ${path}`);
  } catch (error) {
    console.error('there was an error:', error.message);
  }
})('/tmp/hello');