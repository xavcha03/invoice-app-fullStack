import { useEffect } from "react";
import axios from "axios";
import "./invoicesList.css"
import { useState } from "react";

const baseUrl = "http://localhost:3000/invoices";

function InvoicesList_Item(){
    return (
        
        <div className="invoicesList_item">
            <p>#RT3080</p>
            <p>Due 19 Aug 2021</p>
            <p>Jensen Huang</p>
            <p>1800.9 €</p>
            <p>paid</p>
        </div>
        
    )
}

function InvoicesList(){
    const [invoices, setInvoices] = useState([])
    //Quand le composant est monté
    useEffect(()=>{
        //Recevoir les factures de l'API
        if(invoices==null){
            axios.get(baseUrl).then((response)=>{
                let data = JSON.stringify(response.data.invoices);
                setInvoices(data);
            });
        }
        
        
    })

    return (
        <div className="invoicesList">
            <h1>Invoices</h1>
            {
              invoices.map((invoice)=>{
            <InvoicesList_Item />

              })
            }
        </div>
    )
}

export default InvoicesList;