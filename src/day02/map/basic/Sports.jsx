import React from 'react';

const Sports = ({sports}) => {
    
    const {name, member} = sports;

    return (
        <div>
            <li>
                <p>종목 : {name}</p>
                <p>인원 : {member}</p>
            </li>
        </div>
    );
};

export default Sports;