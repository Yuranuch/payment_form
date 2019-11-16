import React from 'react';
import './App.scss';
import UserDatta from "./components/UserData/UserData";
import CardData from "./components/CardData/CardData";


function App() {
  return (
    <div className="payForm">
        <div  className="payForm_title">
            <span className="payForm_title_totalPay">К оплате: <span>270 BYN</span></span>
            <span className="payForm_title_info">Годовая подписка на сервис</span>
        </div>
        <UserDatta />
        <CardData />

    </div>
  );
}

export default App;
