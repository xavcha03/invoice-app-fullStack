const mongoose = require('mongoose');

const InvoiceSchema = mongoose.Schema({
    ref : {type: String, required: true},
    date : {type: String, required: true},
    contact : {type : String, required: true},
    sum : {type : Number, required: true},
    status : {type : String, required : true}
});

module.exports = mongoose.model('Invoice', InvoiceSchema);