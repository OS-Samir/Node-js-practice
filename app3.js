const express = require('express');
const app = express();
const cookie = require('cookie')

app.get('/', function(req, res){
    res.cookie("name", "samir")
    res.send("done")
})


app.get('/read', function(req, res){
    res.send("Read Page")
})


app.listen('3000');