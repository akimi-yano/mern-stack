const mongoose = require('mongoose');
const PrimaryObjectSchema = new mongoose.Schema({
    title:{
        type: String,
        minlength: [2, "Title must be at least 2 characters long"]
    },
    description:{
        type: String,
        minlength: [5, "Description must be at least 5 characters long"]
    }
},{timestamps:true});
mongoose.model("PrimaryObject", PrimaryObjectSchema);