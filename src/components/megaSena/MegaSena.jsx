import React, { useState } from "react";
export default props => {

    function numberNotcontained(max, min, array) {
        const random = parseInt(Math.random() * (max + 1 - min)) + min;
        return array.includes(random) ? numberNotcontained(max, min, array) : random
    }

    function generateNumbers(amount) {
        const numbers = Array(amount).fill(0).reduce((acc) => {
            const newNumber = numberNotcontained(1, 60, acc);
            return [...acc, newNumber];
        }, []).sort((n1, n2) => n1 - n2);

        return numbers
    }

    const amount = props.amount || 6;
    const initialsNumbers = Array(amount).fill(0)
    const [numbers, setNumbers] = useState(initialsNumbers);

    return (
        <div>
            <h2>Mega Sena</h2>
            <h3>{numbers.join(' - ')}</h3>
            <button onClick={e => setNumbers(generateNumbers(amount))}>Gerar Números</button>
        </div>
    )
}