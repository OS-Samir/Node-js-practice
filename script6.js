const express = require('express');
const app = express();
const express = require('path');


app.set("view engine", "ejs");
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")))

app.get('/', function (req, res) {
    res.send("welcome");
})

app.listen(3000);