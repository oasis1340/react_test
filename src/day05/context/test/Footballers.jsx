import React, { useContext } from 'react';
import { FootballerContext } from './Footballer';

const Footballers = () => {
    const {state, actions} = useContext(FootballerContext)
    const onKeyDownInsert = (e) => {
        if(e.key === 'Enter') {
            actions.insert(e.target.value)
        }
    }

    return (
        <div>
            <input type="text" onKeyDown={onKeyDownInsert}/>
            {state.footballers.map((footballer, i) => (
                <button key={i} onClick={() => {actions.remove(i)}}>{footballer}</button>
            ))}
        </div>
    );
};

export default Footballers;