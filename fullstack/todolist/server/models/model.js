const mongoose = require('mongoose');
const PrimaryObjectSchema = new mongoose.Schema({
    task:{
        type: String,
        minlength: [3, "Task must be at least 3 characters long"]
    },
    description:{
        type: String,
        minlength: [5, "Description must be at least 5 characters long"]
    },
    due:{
        type: Date,
        required: [true, "Date field must be filled out"],
        // min: Date.now,
    },
    reviews:[{comment:String, rating:Number}],
    category:{
        type: Number,
    },
},{timestamps:true});
mongoose.model("PrimaryObject", PrimaryObjectSchema);