import React from "react";
import OrderForm from "../components/order-page/OrderForm";

const OrderPage = () => {
    return (
        <div className={"pt-5"}>
            <h3 className="article-header">Zamówienie</h3>
            <OrderForm/>
        </div>
    )
}

export default OrderPage;