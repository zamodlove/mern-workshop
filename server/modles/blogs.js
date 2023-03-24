// ชื่อบทความ (Title) , เนื้อหาบทความ (content), ผู้เขียน (author) , slug(url)
const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        require:true
    },author:{
        type:String,
        default:"Admin"

    },
    slug:{
        type:String,
        lovercase:true,
        unique:true
    }
},{timestamps:true})


module.exports = mongoose.model ('Blogs',blogSchema)