const mongoose = require('mongoose');
const PrimaryObjectSchema = new mongoose.Schema({
    project:{
        type: String,
        minlength: [3, "Project must be at least 3 characters long"]
    },
    due:{
        type: Date,
        required: [true, "Due Date is required"],
    },
    category:{
        type: Number,
    },
},{timestamps:true});
mongoose.model("PrimaryObject", PrimaryObjectSchema);