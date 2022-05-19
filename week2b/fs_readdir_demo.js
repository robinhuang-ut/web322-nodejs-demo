// fs = require('fs');
const fs = require('fs');

fs.readdir(__dirname, (err, files) => {
    if (err)
      console.log(err);
    else {

      console.log('Current directory:', files); 
      console.log("when does this one output?");
    }
  })

console.log("this outputs first");