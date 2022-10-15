const express = require('express');
const router = express.Router();

//Import du controller
const invoiceCtrl = require('../controllers/invoice');


//Send list of invoices
router.get('/', invoiceCtrl.getAllinvoices);
router.post('/', invoiceCtrl.createInvoice);
router.get('/:id', invoiceCtrl.getOneInvoice);
router.delete('/:id', invoiceCtrl.deleteInvoice);
router.put('/:id', invoiceCtrl.modifyInvoice);

module.exports = router;