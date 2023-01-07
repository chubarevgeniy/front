import React from "react";
import styles from './Button.module.scss';

export default function Button(props) {
    return (<>
        <button className={styles.circleButton} onClick={props.onClick} style = {props.style} form = {props.form}>
                {props.children}
        </button>
    </>);
}