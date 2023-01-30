import React from "react";

export default props => {

    const callB = props.click;

    return(
        <div>
            <button onClick={e => callB('Carlos', 50, true) }>Descubra o nome</button>           
        </div>
    )
}