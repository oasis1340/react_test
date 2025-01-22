import React from 'react';

const Food = ({food}) => {

    const {name, price, origin} = food


    return (
        <div>
            <li>
                <p>판매음식 : {name}</p>
                <p>가격 : {price}</p>
                <p>원산지 : {origin[0]}, {origin[1]}</p>
                {/* {origin.map((coa, i, origin) => i === origin.length -1 ? coa : coa + ", ")} */}
            </li>
        </div>
    );
};

export default Food;