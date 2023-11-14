import React from "react";
import './App.css';
import { ProductList } from "./components/ProductList/ProductList";
import { NavBar } from "./components/NavBar/NavBar";
import { Dolar } from "./components/Dolar/Dolar";
import {Contacto} from "./components/Contacto/Contacto"
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";



function App() {

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<ProductList />} />
                <Route exact path="/dolar" element={<Dolar />} />
                <Route exact path="*" element={<ProductList />} />
            </Routes>
            <Contacto />
        </Router>
    )
}

export default App