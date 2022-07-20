const router = require("express").Router();
const mongoose = require("mongoose");

const Post = mongoose.model("Post")



router.get("/:productId", async (req, res)=>{
        const post = await Post.findOne({ _id: req.params.productId})
        res.send(post)
        //console.log(post);
})


router.put("/:productId", async (req, res) => {
        const post = await Post.findByIdAndUpdate({
             _id: req.params.productId
            }, req.body, {
                new: true,
                runValidators: true
            });
        res.send(post)
});


router.delete("/:productId", async (req,res) => {
        const post = await Post.findByIdAndRemove({
            _id: req.params.productId, year: {$gt: 2010}           
            });
        res.send(post)
})

router.post("/", async (req, res) => {
    const post = new Post();
    post.name = req.body.name;
    post.description = req.body.description;
    post.tagSpecial = req.body.tagSpecial;
    post.rating = req.body.rating;
    post.tagging = req.body.tagging;
    await post.save();
    res.send(post)
    res.status(500)
})


module.exports = router;