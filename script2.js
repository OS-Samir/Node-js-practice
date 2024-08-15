// Node.js Basics:
// Introduction to Node.js
// Installing Node.js and npm
// Working with modules
// File system operations
// understanding HTTP module
// Node.js is js runtime environment

//write file
//copy file
//rename
//appendfile
//unlink

const fs = require('node:fs');
fs.writeFile("samir.txt", "hello samir how are you?", function(err){
    if(err) console.error(err);
    else console.log("done!");
})
