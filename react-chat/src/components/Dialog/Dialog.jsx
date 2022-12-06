import React from "react";
import Avatar from "../Avatar/Avatar";
import './Dialog.scss'
import { useState } from "react";

export default function Dialog(props){
    
    const [id, setId] = useState(props.Dialog.id)

    return <>
    <button className="dialog" onClick={()=>props.goToDialog(id)}>
        <div className="dialog-left">
            <Avatar value = {props.Dialog.avatar}/>
        </div>
        <div className="dialog-right">
            <div className="dialog-head">
                <div className="dialog-owner">
                    {props.Dialog.name}
                </div>
                <div className="dialog-time">
                    {props.Dialog.time}
                </div>
            </div>
            <div className="dialog-text">
                {props.Dialog.lastM}
            </div>
        </div>
    </button>
    </>
}