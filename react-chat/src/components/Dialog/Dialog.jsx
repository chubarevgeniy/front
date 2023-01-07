import React from "react";
import Avatar from "../Avatar/Avatar";
import styles from './Dialog.module.scss';
import { useState } from "react";

export default function Dialog(props){
    
    const [id, setId] = useState(props.Dialog.id)

    return <>
    <button className={styles.dialog} onClick={()=>props.goToDialog(id)}>
        <div className={styles.dialogLeft}>
            <Avatar value = {props.Dialog.avatar}/>
        </div>
        <div className={styles.dialogRight}>
            <div className={styles.dialogHead}>
                <div className={styles.dialogOwner}>
                    {props.Dialog.name}
                </div>
                <div className={styles.dialogTime}>
                    {props.Dialog.time}
                </div>
            </div>
            <div className={styles.dialogText}>
                {props.Dialog.lastM}
            </div>
        </div>
    </button>
    </>
}