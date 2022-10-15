const express = require('express');
const mongoose = require('mongoose');

//Import routes
const invoiceRoutes = require('./routes/invoice');

const app = express();

//Connect to mongo DB
mongoose.connect('mongodb+srv://xav03:uAZWVbDBsxgpnbCn@cluster0.q9e8igt.mongodb.net/test',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.use('/invoices', invoiceRoutes);


  module.exports = app;