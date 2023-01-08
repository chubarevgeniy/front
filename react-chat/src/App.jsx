import logo from './logo.svg';
import './App.css';
import PageChat from './pages/PageChat/pageChat';
import PageChatList from './pages/PageChatList/PageChatList';
import PageProfile from './pages/PageProfile/pageProfile';
import React from 'react';
import {useState} from 'react';
import {Route, Routes} from "react-router-dom";

function App() {
  return (<>
    <Routes>
      <Route path="/profile" element = {<PageProfile />}/>
      <Route path="/" element = {<PageChatList />}/>
      <Route path="/chat/:chat_id" element = {<PageChat />}/>
    </Routes>
  </>)
}

export default App;
