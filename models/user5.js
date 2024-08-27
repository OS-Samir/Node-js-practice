const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:21017/testingthedatabase");

const userSchema = mongoose.Schema ({
    username: String,
    email: String,
    age: Number,
    posts: Array
})

module.exports = mongoose.model("user", userSchema)