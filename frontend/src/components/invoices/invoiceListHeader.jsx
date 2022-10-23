import './invoiceListHeader.css'

function InvoiceListHeader({ handleActivateForm, handleSelectStatusChange, selectedStatus, invoices }) {
    console.log(selectedStatus);
    let nbrInvoices = invoices.length;
    return (
        <header className='header'>
            <div className='header_left'>
                <h1>Invoices</h1>
                <p>There are {nbrInvoices} total Invoices</p>
            </div>
            <div className='header_right'>
                <label htmlFor="status">Filter by status
                    <select name="status" value={selectedStatus} onChange={handleSelectStatusChange}>

                        <option value="all">All</option>
                        <option value="paid">Paid</option>
                        <option value="pending" >Pending</option>
                        <option value="draft" >draft</option>
                    </select>
                </label>
                <button onClick={handleActivateForm}><span>+</span>New invoice</button>
            </div>
        </header>
    )
}

export default InvoiceListHeader;