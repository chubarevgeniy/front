import React from "react";
import styles from './pageProfile.module.scss'
import Bar from "../../components/Bar/Bar";
import av from './../../logo.svg'
import Button from "../../components/Button/Button";
import NButton from "../../components/NButton/NButton";
import AvatarBig from "../../components/AvatarBig/AvatarBig";
import Middle from "../../components/Middle/Middle";
import VerticalHandler from "../../components/VerticalHandler/VerticalHandler";
import { useState } from "react";
import ForumIcon from '@mui/icons-material/Forum';
import DoneIcon from '@mui/icons-material/Done';

function saveChanges(name,desc){
    console.log('hi'+name+desc);
}

export default function PageProfile(props){
    const [nameField,setNameField] = useState('jeka')
    const [descField,setDescField] = useState('best person')
    return <VerticalHandler>
        <Bar>
            <NButton onClick = {()=>{props.goToChatList()}}>
                    <ForumIcon/>
            </NButton>
            <NButton onClick = {()=>{saveChanges(nameField,descField)}}>
                    <DoneIcon/>
            </NButton>       
        </Bar>
        <Middle style={{flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <AvatarBig value = {av}> </AvatarBig>
                <form id = 'myProfile' className={styles.profileInfo}>
                    <input 
                    className={styles.nameField}
                    type="text" value = {nameField} 
                    onChange={(e)=>setNameField(e.target.value)}>
                    </input>
                    <textarea
                    className={styles.descField}
                    type="text" value = {descField} 
                    onChange={(e)=>setDescField(e.target.value)}>
                    </textarea>
                </form>
        </Middle>     
    </VerticalHandler>
}