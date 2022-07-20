const mongoose = require("mongoose");


// const post_schema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: "This text is required"
//     },
//     content: {
//         type: String,
//         required: "This text is required"
//     }
// })


const post_schema = new mongoose.Schema({
    productId: {
        type: String
    },
    name: {
        type: String,
        required: "This text is required"
    },
    description: {
        type: String,
        required: "This text is required"
    },
    tagSpecial: {
        type: Boolean,
        required: "This text is required"
    },
    rating: {
        type: Number,
        required: "This text is required"
    },
    tagging: [{
        year: {
            type: Number,
            required: "This text is required"
        },
        tagId: {
            type: Number,
            required: "This text is required"
        }
    }]
})


module.exports = mongoose.model("Post", post_schema)