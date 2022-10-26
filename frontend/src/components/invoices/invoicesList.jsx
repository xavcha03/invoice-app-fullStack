import { useEffect } from "react";
import axios from "axios";
import "./invoicesList.css"
import { useState } from "react";
import InvoiceListHeader from "./invoiceListHeader";

const baseUrl = "http://localhost:3000/invoices";

function InvoicesList_Item({ invoice }) {
    invoice = invoice.invoice;

    return (

        <div className="invoicesList_item" id={invoice._id}>
            <p>{invoice.id}</p>
            <p>{invoice.paymentDue}</p>
            <p className="">{invoice.clientName}</p>
            <p className="invoicesList_item_price">{invoice.total} €</p>
            <p className={`invoicesList_item_status invoicesList_status_item--${invoice.status}`}>{invoice.status}</p>
        </div>

    )
}

function InvoicesList({ isUpdate, setIsupdate, handleActivateForm }) {
    //State => invoice list
    const [invoices, setInvoices] = useState([])
    //State => selectStatus
    const [selectedStatus, setSelectedStatus] = useState("all");
    //Quand le composant est monté
    useEffect(() => {
        //Recevoir les factures de l'API

        axios.get(baseUrl).then((response) => {
            let datas = response.data
            setInvoices(datas.invoices);
            setIsupdate(true);
        }).catch(errors => console.log(errors));



    }, [isUpdate])

    //Filter status System
    let invoiceList = invoices.filter((invoice) => {
        switch (selectedStatus) {
            case "paid":
                return invoice.invoice.status == "paid";
                break;
            case "pending":
                return invoice.invoice.status == "pending";
                break;
            case "draft":
                return invoice.invoice.status == "draft";
                break;

            default:
                return invoice.invoice;
                break;

        }
    });

    function handleSelectStatusChange(e) {
        setSelectedStatus(e.target.value);
    }


    return (
        <div className="invoicesList">
            <InvoiceListHeader handleActivateForm={handleActivateForm} handleSelectStatusChange={handleSelectStatusChange.bind(this)} selectedStatus={selectedStatus} invoices={invoiceList} />
            {invoiceList.map((invoice) => {
                return <InvoicesList_Item invoice={invoice} id={invoice.invoice._id} />
            })}
        </div>
    )
}

export default InvoicesList;