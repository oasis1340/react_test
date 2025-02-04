import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../../modules/count';
import useInput from '../hooks/useInput';

const Counter = () => {
    // store에 값을 가져오는 훅함수 useSelector()
    const { number } = useSelector((state) => state)
    
    // 액션을 발생시키는 훅 함수 useDispatch()
    const dispatch = useDispatch()

    const [value, onChangeValue] = useInput("")
    

    // console.log(value)

    return (
        <div>
            <h1>{number}</h1>
            <input value={value} onChange={onChangeValue}/>
            <div>
                <button onClick={() => { dispatch(decrease(value)) }}>감소</button>
                <button onClick={() => { dispatch(increase(value)) }}>증가</button>
            </div>
        </div>
    );
};

export default Counter;