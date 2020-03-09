const mongoose=require('mongoose')
const PrimaryObject = mongoose.model("PrimaryObject")

module.exports={
    findAll:(req,res)=>{
        PrimaryObject.find({})
            .then(response=>res.json(response))
            .catch(error=>res.json(error))
    },
    create:(req,res)=>{
        PrimaryObject.create(req.body)
            .then(response=>res.json(response))
            .catch(error=>res.json(error))
    },
}