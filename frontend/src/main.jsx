import React from 'react'
import ReactDOM from 'react-dom/client'
import InvoicesList from './components/invoices/invoicesList';
import Navigation from './components/navigation/navigation';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main>
      <Navigation />
      <InvoicesList />
    </main>

  </React.StrictMode>
)
