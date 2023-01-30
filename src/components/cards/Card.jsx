import React from "react";
import "./Card.css";

export default function Card(props) {

const styleTitle = {
    backgroundColor: props.colorTitle || "red"
}

const styleCard = {
    border: props.colorCard || "3px solid red"
}

    return(
        <div className="card" style={styleCard}> 
            <h1 className="title" style={styleTitle}>{props.title}</h1>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}