const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const emailRegexChecker = (val) => {
    if(/^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val)) {
        return true
    } else {
        return false
    }
}
const PrimaryObjectSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:[true, "First name is required"]
    },
    lastName: {
        type:String,
        required:[true, "Last name is required"]
    },
    email: {
        type:String,
        required:[true, "Email is required"],
        validate:[emailRegexChecker, "Please enter a valid email"]
    },
    password: {
        type:String,
        required:[true, "Password is required"],
        minlength:[8, "Password must be 8 characters or longer"]
    }
}, {timestamps:true})

PrimaryObjectSchema.virtual('confirmPassword')
.get(() => this._confirmPassword)
.set((value) => this._confirmPassword = value)

// this function is written in ES5 (no arrow) because the scope of this will change
PrimaryObjectSchema.pre('validate', function(next) {
    //this one is not ._ because we send .confirmPassword on the form from the frontend
    if(this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', "Password must match confirm password")
    }
    next();
})

PrimaryObjectSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    })
})

mongoose.model("PrimaryObject", PrimaryObjectSchema)