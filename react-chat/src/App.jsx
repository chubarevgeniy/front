import logo from './logo.svg';
import './App.css';
import PageChat from './pages/PageChat/pageChat';
import PageChatList from './pages/PageChatList/PageChatList';
import PageProfile from './pages/PageProfile/pageProfile';
import React from 'react';
import {useState} from 'react';

function App() {
  const [pageInf,setPageInf] = useState({page:"PageChatList",id:0})
  function goToChatList(){
    setPageInf({page:"PageChatList",id:0})
  }
  if (pageInf.page === "PageChatList"){
    return (
      <PageChatList setPageInf={setPageInf}/>
    );
  } else if(pageInf.page === "PageChat"){
    return (
      <PageChat id={pageInf.id} goToChatList = {goToChatList}/>
    );
  }else if(pageInf.page === "PageProfile"){
    return (
      <PageProfile goToChatList = {goToChatList}/>
    );
  }
}

export default App;
