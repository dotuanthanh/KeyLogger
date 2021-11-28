const mongoose = require('mongoose')

const Logger = new mongoose.Schema({
    date :{
        type:Date,
        default : Date.now,
    },
    data:{
        type:String,
        trim:true,
        default:'nothing nothing'
    }
},{collection:'Logger',versionKey:false})

module.exports = mongoose.model('Logger',Logger)