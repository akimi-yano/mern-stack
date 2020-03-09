const mongoose = require('mongoose')
const PrimaryObjectSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
}, {timestamps:true});
mongoose.model("PrimaryObject", PrimaryObjectSchema);
