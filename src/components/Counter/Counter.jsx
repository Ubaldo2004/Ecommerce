import React, { useState } from "react";
import './style.css'

export const Counter = () => {

    const [contador, setContador] = useState(1);

    const incrementar = () =>{
        setContador(contador + 1)
    }

    const decrementar = () =>{
        if(contador > 0){
            setContador(contador - 1)    
        }
    }

    return (
        <>
            <p>{contador}</p>
            <button onClick={decrementar}>➖</button>
            <button onClick={incrementar}>➕</button>
        </>
    )
}