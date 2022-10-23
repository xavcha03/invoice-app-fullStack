import React from 'react'
import ReactDOM from 'react-dom/client'
import InvoicesList from './components/invoices/invoicesList';
import Navigation from './components/navigation/navigation';

import Form from './components/invoices/form';

import './index.css'
import { useState } from 'react';



function Main() {
  const [formIsActive, setFormIsActive] = useState(false);

  function handleActivateForm(e) {
    e.preventDefault();
    console.log("Activation du formulaire")
    setFormIsActive(!formIsActive);

  }

  return (
    <main>
      <Navigation />
      <InvoicesList handleActivateForm={handleActivateForm.bind(this)} />
      <Form handleActivateForm={handleActivateForm.bind(this)} formIsActive={formIsActive} />
    </main>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)


