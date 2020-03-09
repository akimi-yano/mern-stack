const mongoose = require("mongoose");
const PrimaryObjectSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        minlength:[2, "Too short"]
    },
    age: Number
}, { timestamps: true });

mongoose.model("PrimaryObject", PrimaryObjectSchema);
