import React, { useState } from "react";
import './Input.css';

export default function Input() {

    function mudarValor(e) {
        setValor(e.target.value);
    }

    const [valor, setValor] = useState("Valor inicial");

    return(
        <div className="input">
            <div>
                <label htmlFor="controlled">Controlado</label>
                <input value={valor} id="controlled" onChange={mudarValor}/>
            </div>
            <div>
                <label htmlFor="unControlled">Não controlado</label>
                <input value={undefined} id="unControlled"/>
            </div>
        </div>
    )
}