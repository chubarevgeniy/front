import './index.css';
const form = document.querySelector('form');
const input = document.querySelector('.form-input');
const buttonSend = document.querySelector('#send-button');
const buttonOptions = document.querySelector('.options');
let mid = document.querySelector('.middle');

form.addEventListener('submit', handleSubmit.bind(this));
//form.addEventListener('keyup', handleKeyPress);
buttonSend.addEventListener('click', handleSendButton.bind(this));
buttonOptions.addEventListener('click', handleOptionsButton.bind(this));
loadLocalStorge();

function handleOptionsButton(event){
    clearMassegesStorage();
}

function handleSubmit (event) {
    event.preventDefault();
    let nowTime = new Date();
    sendMessage(input.value,String(nowTime.getHours()) + ":" + (nowTime.getMinutes() < 10 ? ('0' + String(nowTime.getMinutes())) : String(nowTime.getMinutes())));
    input.value = "";
}

//function handleKeyPress (event) {
//    if (event.keyCode === 13) {
//        event.preventDefault();
//        form.dispatchEvent(new Event('submit'));
//    }
//}

function handleSendButton (event) {
    form.dispatchEvent(new Event('submit'));
}

class Messege {
    constructor(text, time, owner) {
        this.owner = owner;
        this.text = text;
        this.time = time;
    }
}

function sendMessage(text,time) {
    let owner = "me";
    if(text[0] === "<") {
        owner = "not me";
        text = text.slice(1);
    }
    let message = new Messege(text,time,owner);
    displayMessage(message);
    saveLocalMessage(message);
}

function loadLocalStorge(){
    let messages = localStorage.getItem('messages');
    if (!messages) {
        InitMessagesStorage();
        return;
    }
    messages = JSON.parse(messages);
    for(let message of messages.messages) {
        displayMessage(message);
    }
}

function InitMessagesStorage(){
    localStorage.setItem('messages', JSON.stringify({'messages': []}));
}

function displayMessage(message){
    let elem = document.createElement('div');
    if(message.owner === "me"){
        elem.className = 'message-r';
    }
    else {
        elem.className = 'message-l';
    }
    let elemText = document.createElement('div');
    elemText.className = 'message-text';
    let elemHead = document.createElement('div');
    elemHead.className = 'message-head';
    let elemTime = document.createElement('div');
    elemTime.className = 'message-time';
    let elemOwner = document.createElement('div');
    elemOwner.className = 'message-owner';
    elemText.innerText = message.text;
    elemTime.innerText = message.time;
    elemOwner.innerText = message.owner;
    elemHead.append(elemOwner);
    elemHead.append(elemTime);
    elem.append(elemHead);
    elem.append(elemText);
    mid.insertBefore(elem, mid.firstChild);
}

function saveLocalMessage(message){
    let messages = JSON.parse(localStorage.getItem('messages'));
    messages.messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
}

function clearMassegesStorage(){
    InitMessagesStorage();
    document.location.reload();
}


