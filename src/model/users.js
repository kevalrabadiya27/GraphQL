const mongoose = require('mongoose')


const UserScema = mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('users',UserScema)