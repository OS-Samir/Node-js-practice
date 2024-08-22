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
        name: "suraj karki",
        email: "suraj@gmail.com",
        username: "suraj"
    })
    res.send(createdUser);
})



app.get('/update', async (req,res) => {
        // userModel.findOneAndUpdate(findOne, update, {new: true}) 
     let updatedUser = await userModel.findOneAndUpdate({username: "samir"}, {name: "Samir Adhiakri"}, {new: true}) 
     res.send(updatedUser);
 })
 
 app.get('/read', async  (req,res) =>  {

 let users = await userModel.findOne({username: "suraj" }); //find() read and search all users //find gives object while fineone gives array
 res.send(users);
})


app.listen(3000)