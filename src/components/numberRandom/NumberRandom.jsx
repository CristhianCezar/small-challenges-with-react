import React from "react";

export default function NumberRandom(props) {
    const min = props.min;
    const max = props.max;
    const numberRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return (
        <div>
            <p>Menor Número: {min}</p>
            <p>Maior Número: {max}</p>
            <p>Número Aleatório: {numberRandom}</p>
        </div>
    )
}