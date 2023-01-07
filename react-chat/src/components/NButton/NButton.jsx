import React from "react";
import styles from './NButton.module.scss';

export default function NButton(props) {
    return (<>
        <button className={styles.circleButton} onClick={props.onClick} style = {props.style} form = {props.form}>
                {props.children}
        </button>
    </>);
}