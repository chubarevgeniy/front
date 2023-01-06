import React from "react";
import './pageProfile.scss'
import Bar from "../../components/Bar/Bar";
import av from './../../logo.svg'
import Button from "../../components/Button/Button";
import AvatarBig from "../../components/AvatarBig/AvatarBig";
import Middle from "../../components/Middle/Middle";
import { useState } from "react";
import ForumIcon from '@mui/icons-material/Forum';
import DoneIcon from '@mui/icons-material/Done';

function saveChanges(name,desc){
    console.log('hi'+name+desc);
}

export default function PageProfile(props){
    const [nameField,setNameField] = useState('jeka')
    const [descField,setDescField] = useState('best person')
    return <>
    <div className="vertical-holder">
        <Bar value = {(<>
            <Button 
                    style = {{
                        backgroundColor: "rgb(187, 226, 229)",
                        color: "rgb(28, 79, 121)"
                    }}
                    icon = {<ForumIcon/>}
                    onClick = {()=>{props.goToChatList()}}
            />
            <Button 
                    style = {{
                        backgroundColor: "rgb(187, 226, 229)",
                        color: "rgb(28, 79, 121)"
                    }}
                    icon = {<DoneIcon/>}
                    onClick = {()=>{saveChanges(nameField,descField)}}
            />        
        </>)}/>
        <Middle style={{flexDirection: "column", justifyContent: "center", alignItems: "center"}}
                content = {<>
                <AvatarBig value = {av}> </AvatarBig>
                <form id = 'myProfile' className="profileInfo">
                    <input 
                    className={"name-field"}
                    type="text" value = {nameField} 
                    onChange={(e)=>setNameField(e.target.value)}>
                    </input>
                    <textarea
                    className={"desc-field"}
                    type="text" value = {descField} 
                    onChange={(e)=>setDescField(e.target.value)}>
                    </textarea>
                </form>
                </>
                }/>
    </div>
    </>
}