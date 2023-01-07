import React from "react";
import './PageChatList.scss'
import Bar from "../../components/Bar/Bar";
import av from './../../logo.svg'
import Button from "../../components/Button/Button";
import NButton from "../../components/NButton/NButton";
import Middle from "../../components/Middle/Middle";
import Dialog from "../../components/Dialog/Dialog";
import AddDialog from "../../components/AddDialog/AddDialog";
import VerticalHandler from "../../components/VerticalHandler/VerticalHandler";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from "react";

function initDialogsStorage(){
    localStorage.setItem('dialogs', JSON.stringify({'dialogs':[]}));
}

export default function PageChatList(props) {
    function goToDialog(id){
        props.setPageInf({page:"PageChat",id:id})
    }
    function goToProfile(){
        props.setPageInf({page:"PageProfile",id:0})
    }
    let dialogs = localStorage.getItem('dialogs');
    if (!dialogs) {
        initDialogsStorage()
        console.log('hi')
        dialogs = localStorage.getItem('dialogs');
    }
    const [dias, setDias] = useState(JSON.parse(dialogs).dialogs)
    function deleteAllDialogs(){
        initDialogsStorage()
        dialogs = localStorage.getItem('dialogs')
        setDias(JSON.parse(dialogs).dialogs)
        localStorage.clear()
    }
    function addDialogButton(id,name){
        const dias_copy = dias.slice()
        if (dias_copy.find(dialog => dialog.id === id)){
            goToDialog(id)
            return
        }
        dias_copy.push({avatar:av,name:name,id:id,lastM:'',time:'',longTime:JSON.stringify(new Date())})
        localStorage.setItem('dialogs',JSON.stringify({'dialogs':dias_copy}))
        setDias(dias_copy)
        goToDialog(id)
    }

    return (
        <>
        <VerticalHandler>
            <Bar>
                <NButton onClick = {()=>goToProfile()}>
                    <AccountCircleIcon/>
                </NButton>
                <div style={{color:"rgb(187, 226, 229)"}}>NeTelegram</div>
                <NButton onClick = {()=>deleteAllDialogs()}>
                    <DeleteForeverIcon/>
                </NButton>
            </Bar>
            <Middle style={{flexDirection: "column", justifyContent: "start"}}>
                {dias.slice().map(
                    (val,ind)=><Dialog 
                        Dialog={val} 
                        key={ind} 
                        goToDialog = {goToDialog}/>
                    )}
            </Middle>
        </VerticalHandler>
        <AddDialog addDialogButton = {addDialogButton}>
        </AddDialog>
        </>
    );
}