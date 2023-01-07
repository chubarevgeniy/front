import React from "react";
import styles from './Message.module.scss';

export default function Message(props){
    return <>
        <div className={props.Message.owner == "me"?styles.messageR:styles.messageL}>
            <div className={styles.messageHead}>
                <div className={styles.messageOwner}>
                    {props.Message.owner}
                </div>
                <div className={styles.messageTime}>
                    {props.Message.time}
                </div>
            </div>
            <div className={styles.messageText}>
                {props.Message.text}
            </div>
        </div>
    </>
}