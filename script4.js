// Express.js Framework
// Introduction to Express.js // Express js is npm package. It is a framework
// Express manages everything from receiving the request and giving the response
// Setting up a basic expression application
// Routing
// Middleware //When we perform some task before the server accept the request and reaching to route we stop the task and do something.Then this element is called middleware.
// Request and response handling
// Error handling

// Express
const express = require('express');
const app = express();

app.get("/", function(req, res) {
    res.send("my name is samir")
} )

app.get("/profile", function(req, res) {
    res.send("samiir is a champion")
})
app.listen(3000);