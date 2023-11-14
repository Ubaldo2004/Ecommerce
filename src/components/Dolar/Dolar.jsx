import React, { useEffect, useState } from 'react'
import './style.css'


export const Dolar = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://dolarapi.com/v1/dolares/blue")
            .then((response) => response.json())
            .then((data) => {
                setData({
                    compra: data.compra,
                    venta: data.venta,
                    fechaActualizacion: data.fechaActualizacion
                })

            });
    }, [])


    return (

        <div className='dolar'>
            <h1> Valor del Dolar Blue a tiempo real</h1>
            {
                data ? (
                    <div className='card'>
                        <p>Compra: {data.compra}</p>
                        <p>Venta: {data.venta}</p>
                        <p>Fecha de actualización: {data.fechaActualizacion}</p>
                    </div>
                ) : (
                    <p>Cargando...</p>
                )
            }
        </div>

    )


}