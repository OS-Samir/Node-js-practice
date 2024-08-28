const express = require('express');
const PORT = 3000;
const app = express();
const userModel = require("./models/user5");
const postModel = require("./models/post");
const post = require('./models/post');

app.get("/", (req, res) => {
    res.send("hello world!");
})

app.get("/create", async function (req, res)  {
    let user = await userModel.create({
        username: "Samir",
        age: 22,
        email: "samir972@gmail.com",
        
    });
    console.log(user);
    res.send(user);
})


app.get("/post/create", async function (req, res)  {
  let post = await postModel.create({
    postData: "hello how are you all",
    user: "66cda4f8fd327c80120c221e", 
  })
  let user = await userModel.findOne({_id:"66cda4f8fd327c80120c221e" })
  user.posts.push(post._id)
  await user.save()

  res.send({post, user})
})

app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}`);
})