import React, { useRef, useState } from 'react';

const NameRef = () => {
    // 사용자가 입력한 이름을 p태그에 실시간으로 작성
    // 초기화 버튼을 누르면 p태그를 초기화
    const nameRef = useRef()
    const [result, setResult] = useState("")
    const onChangeResultName = (e) => {
        setResult(e.target.value)
    }
    const pressEnter = (e) => {
        if(e.key == 'Enter') {
            setResult(nameRef.current.innerText.replaceAll("님", "") + '님')
        }
    }
    const onClickToReset = () => {
        setResult("")
    }
    return (
        <div>
            <p ref={nameRef}>{result}</p>
            <input type="text" 
            value={result}
            placeholder='이름을 입력하세요' 
            onChange={onChangeResultName}
            onKeyDown={pressEnter}
            />
            <button onClick={onClickToReset}>초기화 버튼</button>
        </div>
    );
};

export default NameRef;