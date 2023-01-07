import React from "react";
import styles from './Middle.module.scss';

export default function Middle(props){
    return <>
    <div className={styles.middle} style={props.style}>
        {props.children}
    </div>
    </>
}