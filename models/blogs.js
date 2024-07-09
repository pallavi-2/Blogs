const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please provide a name'],
    },
    description:{
        type:String,
        required:true

    },
    category:{
        type:String,
        enum : ['Technology', 'Business', 'Travel', 'Health', 'Lifestyle']
    }
})

module.exports = mongoose.model('Blog', blogSchema);