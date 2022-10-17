//Import Invoice Schema
const Invoice = require('../models/invoice')


//list all invoices
exports.getAllinvoices = (req, res) =>{
    Invoice.find()
        .then((invoices)=>{
            const invoicesOk = invoices.map(invoice=>{
                return {
                    invoice,
                    path : `/invoices/${invoice._id}`
                }
            })
            res.status(200);
            res.json({
                message : 'All invoices',
                status : 'ok',
                invoices : invoicesOk
            })
        })
        .catch((error)=>{
            res.status(400);
            res.json({
                message : 'Impossible to get invoices'
            })
        })
}


//Create a new invoice
exports.createInvoice = (req, res) =>{
    console.log('request to add a new invoice');
    

    //create model
    const invoice = new Invoice({
        ...req.body
    });
    //Save invoice
    invoice.save()
        .then(()=>{
            res.status(200);
            res.json({
                saved : true,
                message : 'new invoice added',
                invoice : invoice,
                path: `/invoices/${invoice._id}`
            })
        })


    
    
}

//send one invoice
exports.getOneInvoice = (req, res) => {
    Invoice.findOne({
        _id: req.params.id
    })
        .then((invoice)=>{
            res.status(200);
            res.json({
                message : 'ok',
                status : 200,
                invoice : invoice
            })
        })
        .catch((error=>{
            res.status(404);
            res.json({
                message : 'impossible to get the invoice',
                error : error
            })
        }));
}

exports.deleteInvoice = (req, res) =>{
    Invoice.deleteOne({_id: req.params.id})
        .then(()=>{
            res.status(200);
            res.json({
                message : 'Invoice deleted'
            });
        })
        .catch((error)=>{
            res.status(401);
            res.json({
                message : 'Impossible to delete invoice',
                error : error
            })
        })
}


exports.modifyInvoice = (req, res)=>{
    const invoice = new Invoice({
        ...req.body
    });
    Invoice.updateOne({
        _id : req.params.id
        },invoice)
    .then(()=>{
        res.status(200);
        res.json({
            message : 'Update ok',
            invoice : invoice
        })
    })
    .catch((error)=>{
        res.status(401);
        res.json({
            message : 'Update not ok',
            error : error
        })
    })

}