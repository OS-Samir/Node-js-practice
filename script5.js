// setting up parsers for form
// setting up ejs for esj pages
// setting up  public static files

//form handling and working with forms 
// process: 1)Initialize the project with npm (npm init -y)
// Install express

// dynamic routing
// how to get data coming from frontend at backend route


const express = require('express');
const app = express();

//These two are parsers
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get("/", function (req, res) {
    res.send("server is listening")
})

app.listen(3000, function() {
    console.log("its running") 
})