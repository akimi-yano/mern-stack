const mongoose = require('mongoose')
const PrimaryObjectSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters in length"]
    },
    position:{
        type: String,
        required: false,
    },
    game1:[0,0,1],
    game2:[0,0,1],
    game3:[0,0,1],
}, {timestamps: true});

mongoose.model("PrimaryObject", PrimaryObjectSchema);