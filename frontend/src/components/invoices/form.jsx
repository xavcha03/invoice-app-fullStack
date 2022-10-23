import './form.css';
import axios from 'axios';


function Form({ handleActivateForm, formIsActive }) {

    function handleSubmitForm(e) {
        e.preventDefault();
        let datas = {
            "id": "",
            "paymentDue": "2022-09-20",
            "items": [
                {
                    "name": "Banner Design",
                    "quantity": 1,
                    "price": 156.00,
                    "total": 156.00
                },
                {
                    "name": "Email Design",
                    "quantity": 2,
                    "price": 200.00,
                    "total": 400.00
                }
            ],

        }
        datas = {
            description: e.target.invoiceDescription.value,
            createdAt: e.target.invoiceDate.value,
            paymentTerms: e.target.invoiceTerm.value,
            clientName: e.target.clientName.value,
            clientEmail: e.target.clientEmail.value,
            status: "pending",
            senderAddress: {
                street: e.target.adressStreet.value,
                city: e.target.adressCity.value,
                postCode: e.target.adressPostCode.value,
                country: e.target.adressCountry.value
            },
            clientAddress: {
                street: e.target.clientStreet.value,
                city: e.target.clientStreet.value,
                postCode: e.target.clientStreet.value,
                country: e.target.clientStreet.value
            },
            total: 5000
        }


        const baseUrl = "http://localhost:3000/invoices"

        axios
            .post(baseUrl, datas)
            .then((response) => {
                console.log("envois au serveur ok", response);
                //Reactualisation
            })
            .catch((error) => console.log("erreur : ", erreur));
    }

    return (
        //formLayer--actif to activate form
        <div className={formIsActive ? `formLayer formLayer--actif` : `formLayer`} >
            <form className='invoiceForm' onSubmit={handleSubmitForm}>
                <h1>New Invoice</h1>
                <h3>BillForm</h3>
                <fieldset>

                    <div class="inputGroup inputGroup--full">
                        <label htmlFor="adressStreet">Street Adress</label>
                        <input id="adressStreet" type="text" name="adressStreet" />
                    </div>
                    <div class="inputGroup">
                        <label htmlFor="adressCity">City</label>
                        <input id="adressCity" type="text" name="adressCity" />
                    </div>
                    <div class="inputGroup">
                        <label htmlFor="adressPostCode">Post code</label>
                        <input id="adressPostCode" type="text" name="adressPostCode" />
                    </div>
                    <div class="inputGroup">
                        <label htmlFor="adressCountry">Country</label>
                        <input id="adressCountry" type="text" name="adressCountry" />
                    </div>
                </fieldset>

                <h3>Bill To</h3>
                <fieldset>
                    <div class="inputGroup inputGroup--full">
                        <label htmlFor="clientName">Client's Name</label>
                        <input id="clientName" type="text" name="clientName" />
                    </div>
                    <div class="inputGroup inputGroup--full">
                        <label htmlFor="clientEmail">Client's Email</label>
                        <input id="clientEmail" type="text" name="clientEmail" />
                    </div>
                    <div class="inputGroup inputGroup--full">
                        <label htmlFor="clientStreet">Street Adress</label>
                        <input id="clientStreet" type="text" name="clientStreet" />
                    </div>
                    <div class="inputGroup">
                        <label htmlFor="clientCity">City</label>
                        <input id="clientCity" type="text" name="clientCity" />
                    </div>
                    <div class="inputGroup">
                        <label htmlFor="clientPostCode">Post Code</label>
                        <input id="clientPostCode" type="text" name="clientPostCode" />
                    </div>
                    <div class="inputGroup">
                        <label htmlFor="clientCountry">Country</label>
                        <input id="clientCountry" type="text" name="clientCountry" />
                    </div>



                </fieldset>

                <fieldset>
                    <div class="inputGroup inputGroup--half">
                        <label htmlFor="invoiceDate">Invoice Date</label>
                        <input id="invoiceDate" type="date" name="invoiceDate" />
                    </div>
                    <div class="inputGroup inputGroup--half">
                        <label htmlFor="invoiceTerm ">Payement Terms</label>
                        <select id="invoiceTerm" name="invoiceTerm">
                            <option value="30" selected>Net 30 Days</option>
                            <option value="7">7 Days</option>
                        </select>
                    </div>
                    <div class="inputGroup inputGroup--full">
                        <label htmlFor="invoiceDescription">Project Description</label>
                        <input id="invoiceDescription" type="text" name="invoiceDescription" />
                    </div>
                </fieldset>
                <h3>Item List</h3>
                <fieldset>
                    To do
                </fieldset>

                <button onClick={handleActivateForm}>Discard</button>
                <button>Save as Draft</button>
                <button type="submit">Save & Send</button>

            </form>
        </div>

    )
}

export default Form;