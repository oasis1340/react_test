import React, { useContext } from 'react';
import { FontSizeContext } from './FontContext';

const Child = () => {
    const {state, action} = useContext(FontSizeContext);
    const {fontSize} = state;
    const {setFontSize} = action;
    console.log(fontSize)
    return (
        <>
            <p style={{fontSize}}>글자 나타내기</p>
            <button onClick={() => { setFontSize("10rem") }}>글자 크게 바꾸기</button>
        </>
        // <FontSizeConsumer>
        //     {(context) => { console.log(context)}}
        // </FontSizeConsumer>
    );
};

export default Child;