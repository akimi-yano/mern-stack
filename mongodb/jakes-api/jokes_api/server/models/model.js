const mongoose = require("mongoose");
const PrimaryObjectSchema = new mongoose.Schema({
    name: String,
    age: Number
}, {timestamps:true});

mongoose.model("PrimaryObject", PrimaryObjectSchema);
