import React from "react";
import { useState } from "react";
import './AddDialog.scss';
import AddIcon from '@mui/icons-material/Add';

export default function AddDialog(props) {
    const [isActive, setIsActive] = useState(false)
    const [idInputValue,setIdInputValue] = useState('')
    const [nameInputValue,setNameInputValue] = useState('')
    return(
    <>
    <div 
    className={isActive? "addDialogWindow active": "addDialogWindow"}
    onClick = {()=>setIsActive(false)}>
        <div className={isActive? "addDialog-form active": "addDialog-form"} onClick={e=>e.stopPropagation()}>
            <form id = 'addDialog' className="addForm">
                <input 
                className={isActive? "id-input active": "id-input"}
                type="text" value = {idInputValue} 
                onChange={(e)=>setIdInputValue(e.target.value)}
                placeholder = "Enter id">
                </input>
                <input 
                className={isActive? "name-input active": "name-input"}
                type="text" value = {nameInputValue} 
                onChange={(e)=>setNameInputValue(e.target.value)}
                placeholder = "Enter Name">
                </input>
            </form>
        </div>
    </div>
    <div 
    className="addDialogButton"
    onClick = {isActive? ()=>props.addDialogButton(idInputValue,nameInputValue): ()=>setIsActive(true)}>
        <AddIcon />
    </div>
    </>)
}