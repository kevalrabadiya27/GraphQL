const mongoose = require('mongoose')


const QuoteSchema = mongoose.Schema({
   quote:{
    type:String,
    required:true
   },
   by:{
    type:String
   }

})

module.exports = mongoose.model('quotes',QuoteSchema)