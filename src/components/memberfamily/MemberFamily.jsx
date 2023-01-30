import React from "react";

export default function FamiliaMembros(props) {
    return (
        <div>
            <ul>
                <li>{props.name} {props.lastName}</li>
            </ul>
        </div>
    )
}