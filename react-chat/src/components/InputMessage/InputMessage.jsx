import React from "react";
import {useState} from 'react';
import './InputMessage.scss'

function sendMessage(e,value,Mes) {
    e.preventDefault();
    let nowTime = new Date();
    Mes(value,nowTime);
}

export default function InputMessage(props) {
    const [inputValue, setInputValue] = useState('');
    return (
        <div>
            <form id={props.id} className = "textareaholder" onSubmit={(e)=>{sendMessage(e,inputValue,props.Mes); setInputValue('')}}>
                <textarea className="form-input" type="text" value = {inputValue} onChange={(e)=>setInputValue(e.target.value)}>
                </textarea>
            </form>
        </div>
    );
}