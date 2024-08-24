const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();


app.use(cookieParser())

app.get('/', function(req, res){
    res.cookie("name", "samir")
    res.send("done")
})


app.get('/read', function(req, res){
    console.table(req.cookies)
    res.send("Read Page")
})


app.listen('3000');