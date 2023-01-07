import React from "react";
import "./pageChat.scss";
import Bar from "../../components/Bar/Bar";
import Avatar from "../../components/Avatar/Avatar.jsx";
import av from './../../logo.svg'
import Button from "../../components/Button/Button";
import NButton from "../../components/NButton/NButton";
import VerticalHandler from "../../components/VerticalHandler/VerticalHandler";
import { useState } from "react";
import InputMessage from "../../components/InputMessage/InputMessage";
import Message from "../../components/Message/Message";
import Middle from "../../components/Middle/Middle";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SendIcon from '@mui/icons-material/Send';
import ForumIcon from '@mui/icons-material/Forum';
import InfoIcon from '@mui/icons-material/Info';

function InitMessagesStorage(id){
    localStorage.setItem('messages_'+id, JSON.stringify({'messages': []}));
}

export default function PageChat(props) {

    let messages = localStorage.getItem('messages_'+props.id);
    if (!messages) {
        InitMessagesStorage(props.id);
        console.log('hi')
        messages = localStorage.getItem('messages_'+props.id);
    }
    
    const [mes,setMes] = useState(JSON.parse(messages).messages);
    
    function sendMessage(value,time){
        const mes_copy = mes.slice()
        const time_s = String(time.getHours()) + ":" + (time.getMinutes() < 10 ? ('0' + String(time.getMinutes())) : String(time.getMinutes()))
        let owner = "me"
        let dialogs = JSON.parse(localStorage.getItem('dialogs')).dialogs
        if (value[0]=="<"){
            owner = dialogs.find(dialog => dialog.id === props.id).name
            value = value.slice(1)
        }
        mes_copy.push({owner:owner,time:time_s,text:value})
        localStorage.setItem('messages_'+props.id, JSON.stringify({'messages': mes_copy}));
        setMes(mes_copy)
        let dialog = dialogs.find(dialog => dialog.id === props.id)
        dialog.lastM = value.slice(0,40)+'...'
        dialog.time = time_s
        dialog.longTime = JSON.stringify(time)
        dialogs = dialogs.sort((a,b)=>a.longTime>b.longTime? -1: a.longTime<b.longTime? 1: 0)
        localStorage.setItem('dialogs',JSON.stringify({'dialogs':dialogs}))
    }

    return (
        <VerticalHandler>
            <Bar>
                <NButton onClick = {()=>{props.goToChatList()}}>
                    <ForumIcon/>
                </NButton>
                <Avatar value = {av} />
                <NButton>
                    <InfoIcon/>
                </NButton>
            </Bar>
            <Middle>
                {mes.slice().reverse().map((val,ind)=><Message Message={val} key={ind}/>)}
            </Middle>
            <Bar>
                <NButton onClick = {()=>{InitMessagesStorage(props.id); setMes([]);}}>
                    <DeleteForeverIcon/>
                </NButton>
                <InputMessage 
                    id = "InputMessage" 
                    Mes = {sendMessage}
                    chatId = {props.id}/>
                <NButton form = "InputMessage">
                    <SendIcon/>
                </NButton>
            </Bar>
        </VerticalHandler>
    );
}