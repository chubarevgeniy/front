import React from "react";
import { useState } from "react";
import styles from './AddDialog.module.scss';
import AddIcon from '@mui/icons-material/Add';

export default function AddDialog(props) {
    const [isActive, setIsActive] = useState(false)
    const [idInputValue,setIdInputValue] = useState('')
    const [nameInputValue,setNameInputValue] = useState('')
    return(
    <>
    <div 
    className={isActive? `${styles.addDialogWindow} ${styles.active}`: styles.addDialogWindow}
    onClick = {()=>setIsActive(false)}>
        <div className={isActive? `${styles.addDialogForm} ${styles.active}`: styles.addDialogForm} onClick={e=>e.stopPropagation()}>
            <form id = 'addDialog' className={styles.addForm}>
                <input 
                className={isActive? `${styles.idInput} ${styles.active}`: styles.idInput}
                type="text" value = {idInputValue} 
                onChange={(e)=>setIdInputValue(e.target.value)}
                placeholder = "Enter id">
                </input>
                <input 
                className={isActive? `${styles.nameInput} ${styles.active}`: styles.nameInput}
                type="text" value = {nameInputValue} 
                onChange={(e)=>setNameInputValue(e.target.value)}
                placeholder = "Enter Name">
                </input>
            </form>
        </div>
    </div>
    <div 
    className={styles.addDialogButton}
    onClick = {isActive? ()=>props.addDialogButton(idInputValue,nameInputValue): ()=>setIsActive(true)}>
        <AddIcon />
    </div>
    </>)
}