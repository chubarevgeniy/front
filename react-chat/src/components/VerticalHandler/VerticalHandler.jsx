import React from "react";
import styles from './VerticalHandler.module.scss';

export default function VerticalHandler(props){
    return <>
    <div className={styles.verticalHandler}>
        {props.children}
    </div>
    </>
}