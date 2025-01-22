import React from 'react';

const User = ({users}) => {

    const {name, phone, company, address} = users


    // const {city} = city

    return (
        <div>
            <li>
                <p>이름 : {name}</p>
                <p>전화번호 : {phone}</p>
                <p>회사 : {company.name}</p>
                <p>거주지 : {address.city}</p>
            </li>
        </div>
    );
};

export default User;