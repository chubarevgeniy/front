import React from "react";
import './Middle.scss'

export default function Middle(props){
    return <>
    <div className="middle" style={props.style}>
        {props.content}
    </div>
    </>
}