import React from "react";
import './PageChatList.scss'
import Bar from "../../components/Bar/Bar";
import av from './../../logo.svg'
import Button from "../../components/Button/Button";
import Middle from "../../components/Middle/Middle";
import Dialog from "../../components/Dialog/Dialog";
import AddDialog from "../../components/AddDialog/AddDialog";
import { useState } from "react";

function initDialogsStorage(){
    localStorage.setItem('dialogs', JSON.stringify({'dialogs':[]}));
}

export default function PageChatList(props) {
    function goToDialog(id){
        props.setPageInf({page:"PageChat",id:id})
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
        <div className="vertical-holder">
            <Bar value = {(<>
                <Button 
                    style = {{
                        backgroundColor: "rgb(187, 226, 229)",
                        color: "rgb(28, 79, 121)"
                    }}
                    icon = "pr"/>
                <div style={{color:"rgb(187, 226, 229)"}}>NeTelegram</div>
                <Button 
                    style = {{
                        backgroundColor: "rgb(187, 226, 229)",
                        color: "rgb(28, 79, 121)"
                    }}
                    icon = "del"
                    onClick = {()=>deleteAllDialogs()}
                    />
            </>)} />
            <Middle style={{flexDirection: "column", justifyContent: "start"}}
                content = {dias.slice().map(
                    (val,ind)=><Dialog 
                        Dialog={val} 
                        key={ind} 
                        goToDialog = {goToDialog}/>
                    )}/>
        </div>
        <AddDialog addDialogButton = {addDialogButton}/>
        </>
    );
}