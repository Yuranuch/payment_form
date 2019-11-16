import React from 'react';
import PhoneInput from 'react-phone-input-2'


function UserDatta() {
    return (
        <div className="userData_wrap">
            <div className="inputData_section">
                <span>Ваш email</span>
                <input className="error" placeholder="mail@mail.com" type="text" name=""/>
            </div>
            <div className="inputData_section">
                <span>Номер телефона</span>
                {/*<input placeholder="+375(XX) XXX XX XX" type="text" name=""/>*/}
                <PhoneInput placeholder="+375 (XX) XXX XX XX" inputExtraProps={{name: 'phone', required: true, autoFocus: true }} />
            </div>
        </div>
    )
}

export default UserDatta;
