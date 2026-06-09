const express = require('express');
const postmodel = require('./models/post.model');
const cors = require('cors');


const app = express();
app.use(cors());
app.use (express.json());
app.post('/create',async (req, res) => {

   const post = await postmodel.create({
    yourname: req.body.yourname,
    work_email: req.body.work_email,
    estimated_budget: req.body.estimated_budget,
    company: req.body.company,
    tell_me_about_youer_porject: req.body.tell_me_about_youer_porject
   });
   res.status(201).json({message: "Post created successfully", 
    post
});
});
app.get("/posts", async (req, res) => {
    const posts = await postmodel.find();
    return res.status(200).json
    ({message: "posts retrieved successfully", posts});
});


module.exports = app;