import React from 'react';
import PhoneInput from 'react-phone-input-2'


function UserData() {
    return (
        <div className="userData_wrap">
            <div className="inputData_section">
                <span>Ваш email</span>

                <input placeholder="mail@mail.com" type="text" id="name" name="name"/>

            </div>
            <div className="inputData_section">
                <span>Номер телефона</span>
                <PhoneInput  placeholder="+375 (XX) XXX XX XX" inputExtraProps={{name: 'phone', required: true, autoFocus: true }} />
            </div>
        </div>
    )
}

export default UserData;
