// Data storage: 
// Types of DBS
// What and why
// terminologies - collections, documents, schemas, keys, models


const express = require('express');
const app = express();

const userModel = require("./usermodel");

app.get('/', (req,res) => {
    res.send("hello")
})

app.get('/create', async (req,res) => {
   let createdUser = await userModel.create({
        name: "samir",
        email: "samir@gmail.com",
        username: "samir"
    })
    res.send(createdUser);
})


app.listen(3000)