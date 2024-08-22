// Data storage: 
// Types of DBS
// What and why
// terminologies - collections, documents, schemas, keys, models


const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("hello")
})

app.listen(3000)