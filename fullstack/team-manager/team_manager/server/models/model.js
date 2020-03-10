const mongoose = require('mongoose')
const PrimaryObjectSchema = new mongoose.Schema({
    // name:{
    //     type: String,
    //     required: true,
    //     min
    // },
}, {timestamps: true});

mongoose.model("PrimaryObject", PrimaryObjectSchema);