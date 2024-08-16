// Express.js Framework
// Introduction to Express.js // Express js is npm package. It is a framework
// Express manages everything from receiving the request and giving the response
// Setting up a basic expression application
// Routing
// Middleware
// Request and response handling
// Error handling


const express = require('express');
const app = express();

app.get("/", function(req, res) {
    res.send("my name is samir")
} )

app.get("/profile", function(req, res) {
    res.send("samir is a champion")
})
app.listen(3000);