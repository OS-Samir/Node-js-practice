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


// //write File
// const fs = require('node:fs');
// fs.writeFile("samir.txt", "hello samir how are you?", function(err){
//     if(err) console.error(err);
//     else console.log("done!");
// })


//appendFile
// const fs = require('node:fs');
// fs.appendFile("samir.txt", " ma thik chu dost", function(err) {
//     if (err) {
//         throw err;
//     }
//     else console.log("done!");
// })

// renameFile
// const fs = require('node:fs');
// fs.rename("samir.txt", "samir1.txt" , function (err) {
//     if (err) throw err;
//     else console.log("done!");  
// })

//copyFile
// const fs = require('node:fs');
// fs.copyFile("samir1.txt", "./copy/copy.txt", function(err){
//     if (err) throw err;
//     else console.log("done!");

// })


//unlink
// const fs = require("node:fs") 

// fs.unlink("./copy/copy.txt", function(err) {
//     if (err) throw err.message;
//     else console.log("done!");
// })



//rmDir (in default state it will delete empty directory but not directories with file(s))
// const fs = require("node:fs")

// fs.rmdir("./copy", {recursive: true}, function(err) {
//     if (err) console.error(err);
//     else console.log("done")
// })



// mkDir
// const fs = require("node:fs")

// fs.mkdir("./copy", function(err) {
//     if (err) throw err;
//     else console.log("done")
// })