const express = require('express');
const router = express.Router();
const Blogs = require('../models/blogs');

router.get("/allblogs",async(req,res)=>{
    try{
        const blogs = await Blogs.find();
        res.status(200).json(blogs);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
})

router.get("/blogs/:id",async(req,res)=>{
    try{
        const blogId = req.params.id;
        const blog = await Blogs.find({_id:blogId})
        if(!blog)
        {
            res.status(400).send(`Blog with id ${blogId} not found`)
        }
        res.status(201).json(blog)
    }
    catch(err)
    {
        res.status(400).send(err);
    }
}) 

router.post("/createblog",async(req,res)=>{
    try{
        const blog = new Blogs({...req.body})
        await blog.save();
        res.status(201).json(blog)
    }
    catch(err)
    {
        if(err.name == 'ValidationError')
        {
            res.status(400).send(err.message)
        }
        res.status(400).send(err);    
    }
})

router.patch("/updateblog/:id",async(req,res)=>{
    const id =req.params.id;
    try{
        const blog = await Blogs.findByIdAndUpdate(id,req.body,{
            new:true,runvalidators:true
        })
        if (!blog) {
            return res.status(404).send("Blog not found");
        }
        res.status(200).send(blog);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
})

module.exports = router;