import React from "react";
import './Message.scss'

export default function Message(props){
    let cln = "message-l"
    if (props.Message.owner == "me")
    {
        cln = "message-r"
    }
    return <>
        <div className={cln}>
            <div className="message-head">
                <div className="message-owner">
                    {props.Message.owner}
                </div>
                <div className="message-time">
                    {props.Message.time}
                </div>
            </div>
            <div className="message-text">
                {props.Message.text}
            </div>
        </div>
    </>
}