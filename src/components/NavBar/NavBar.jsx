import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const NavBar = () => {
    return(
        <div className='nav'>
            <div className='nav-logo'>
                <Link className='link' to="/">
                    <img className='imagen' src="/img/logo.png" alt="Logo" />
                </Link>
                <Link className='tienda' to="/">ZapatillasExpress</Link>
            </div>
            <div className='div-nav-link'>
                <Link className='link nav-link' to="/Zapatillas">Zapatillas</Link>
                <Link className='link nav-link' to="/Dolar">Dolar</Link>
                <img className='imagenCarrito' src="/img/carrito.pn" alt="" />
            </div>
        </div>
    )
}