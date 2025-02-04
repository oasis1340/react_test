import React from 'react';
import useCountStore from './useCountStore'

const ZustandCounter = () => {

    const {number, increase, decrease} = useCountStore()

    return (
        <div>
            <button onClick={decrease}>감소</button>
            <p>{number}</p>
            <button onClick={increase}>증가</button>
        </div>
        
    );
};

export default ZustandCounter;