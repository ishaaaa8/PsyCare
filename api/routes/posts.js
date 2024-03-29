const router=require("express").Router();
const User=require("../models/User");
const Post=require("../models/Post");

//create 
router.post("/",async (req,res) => {
    const newPost = new Post(req.body);
    try{
        const savedPost=await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err);
    }
})


//update

router.put("/:id",async (req,res) => {
    try{
        const post=await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try{
                const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
                    $set:req.body
                },
                {new:true}
                );
                res.status(200).json(updatedPost);
            }
            catch(err){
                res.status(500).json(err);
            }
        }else{
            res.status(401).json("You can update only your post");
        }

    }
    catch(err){
        res.status(500).json(err);
    }

});


//delete post
router.delete("/:id",async (req,res) => {
    try{
        const post=await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try{
                await post.delete();
                res.status(200).json("Post successfully deleted");
            }
            catch(err){
                res.status(500).json(err);
            }
        }else{
            res.status(401).json("You can delete only your post");
        }

    }
    catch(err){
        res.status(500).json(err);
    }

});

//GET post
router.get("/:id",async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);

    }
    catch(err){
        res.status(500).json(err);
    }
});

//get all post
//GET post
router.get("/",async (req,res) => {
    const username=req.query.user;
    const catName=req.query.cat;
    console.log(username , catName);
    try{
        let posts;
        if(username){
            posts=await Post.find({username})
        }
        else if(catName){
            posts=await Post.find({categories:{
                $in:[catName]
            }});
        }
        else{
            console.log("hello");
            posts=await Post.find();
        }
        res.status(200).json(posts);
    }
    catch(err){
        res.status(500).json(err);
    }
});
module.exports=router;