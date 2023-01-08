const OrderForm = () => {
    return (
        <div className={"pt-5"}>
            <form className={"d-flex flex-row"}>
                <div className="col-4 d-flex flex-column px-2">
                    <label className={"d-flex justify-content-end pb-2"}>
                        Imię*
                        <input type="text" required/>
                    </label>
                    <label className={"d-flex justify-content-end py-2"}>
                        Nazwisko*
                        <input type="text" required/>
                    </label>
                    <label className={"d-flex justify-content-end py-2"}>
                        Firma
                        <input type="text"/>
                    </label>
                    <label className={"d-flex justify-content-end py-2"}>
                        E-mail*
                        <input type="email" required/>
                    </label>
                    <label className={"d-flex justify-content-end py-2"}>
                        Telefon*
                        <input type="tel"
                               required/>
                    </label>
                    <label className={"d-flex justify-content-end py-2"}>
                        Kraj*
                        <input type="text" required/>
                    </label>
                    <label className={"d-flex justify-content-end py-2"}>
                        Adres*
                        <input type="text" required/>
                    </label>
                    <label className={"d-flex justify-content-end py-2"}>
                        Kod pocztowy*
                        <input type="text" required/>
                    </label>
                    <label className={"d-flex justify-content-end pt-2"}>
                        Miasto*
                        <input type="text" required/>
                    </label>
                </div>
                <div className="col-2"/>
                <div className="col-6 d-flex flex-column">
                    <label>
                        <input type="checkbox"/>
                        Akceptuje regulamin
                    </label>
                    <label>
                        <input type="checkbox"/>
                        Chcę otrzymywać newsletter
                    </label>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default OrderForm;