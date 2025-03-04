import React, { useRef } from 'react';

const Validation = () => {
    const inputRef = useRef([])
    const formRef = useRef()
    const onClickToValidate = () => {
        for(let input of inputRef.current) {
            if(!input.value) {
                alert(`${input.name} + 값을 확인해주세요.`)
                return;
            }
        }
        formRef.current.submit()
    }

    return (
        <div>
            <form ref={formRef}>
                <div><span>아이디</span><input ref={(el) => { inputRef.current[0] = el}} type="text" name="id" /></div>
                <div><span>비밀번호</span><input ref={(el) => { inputRef.current[1] = el}} type="password" name="password" /></div>
                <button onClick={onClickToValidate} type='button'>전송</button>
            </form>
        </div>
    );
};

export default Validation;