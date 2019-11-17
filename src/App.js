import React from 'react';
import './App.scss';
import UserData from "./components/UserData/UserData";
import CardData from "./components/CardData/CardData";
import { Formic } from "formic";

function App() {
  return (
    <div className="payForm">
        <div  className="payForm_title">
            <span className="payForm_title_totalPay">К оплате: <span>270 BYN</span></span>
            <span className="payForm_title_info">Годовая подписка на сервис</span>
        </div>
        <Formic>
            <UserData />
            <CardData />
        </Formic>
    </div>
  );
}

export default App;
