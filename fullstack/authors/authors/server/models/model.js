const mongoose = require('mongoose');
const PrimaryObjectSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is required, Akimi-Chan~ ( ͡° ͜ʖ ͡°)"],
        minlength: [3, "name must be at least 3 characters long"]
    }
},{timestamps:true});
mongoose.model("PrimaryObject", PrimaryObjectSchema);