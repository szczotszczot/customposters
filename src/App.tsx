import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MenuBar from "./components/shared/MenuBar";
import MainPage from "./pages/MainPage";
import DeliveryPage from "./pages/DeliveryPage";
import ContactPage from "./pages/ContactPage";
import OrderPage from "./pages/OrderPage";
import PriceListPage from "./pages/PriceListPage";

function App() {
    return (
        <div className={"d-flex justify-content-center px-5 pt-3"} style={{backgroundColor: "#fefff1"}}>
            <div className={"col-10"}>
                <MenuBar/>
                    <Routes>
                        <Route index element={<MainPage/>}/>
                        <Route path={"/dostawa"} element={<DeliveryPage/>}/>
                        <Route path={"/kontakt"} element={<ContactPage/>}/>
                        <Route path={"/zamowienie"} element={<OrderPage/>}/>
                        <Route path={"/cennik"} element={<PriceListPage/>}/>
                    </Routes>
            </div>
        </div>
    );
}

export default App;
