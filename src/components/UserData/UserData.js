import React from 'react';

function UserDatta() {
    return (
        <div className="userData_wrap">
            <div className="inputData_section">
                <span>Ваш email</span>
                <input className="error" placeholder="mail@mail.com" type="text" name=""/>
            </div>
            <div className="inputData_section">
                <span>Номер телефона</span>
                <input placeholder="+375(XX) XXX XX XX" type="text" name=""/>
            </div>
        </div>
    );
}

export default UserDatta;
