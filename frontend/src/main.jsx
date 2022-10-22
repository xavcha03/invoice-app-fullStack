import React from 'react'
import ReactDOM from 'react-dom/client'
import InvoicesList from './components/invoices/invoicesList';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InvoicesList />
  </React.StrictMode>
)
