const mongoose = require('mongoose');

exports.ClientSchema = mongoose.Schema({
    name : {type : String, required : true},
    email : {type: String, required: true},
    street : {type: String, required: true},
    city : {type: String, required: true},
    postCode : {type: String, required: true},
    country : {type: String, required: true},   
})


module.exports = mongoose.model('Client', ClientSchema);