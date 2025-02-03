import React from 'react';
import { ColorConsumer } from './FontContext';

// context에 색상을 "red" 초기값을 추가하고,
// 색상을 바뀌는 버튼을 눌렀을 때 "pink"로 색깔이 바뀔 수 있게 처리하기
const ChildComponent = () => {
    return (
        <div>
            <ColorConsumer>
                {(context) => (
                    <>
                        <p style={{color : context.state.color}}>색상이 나오는 글자😎</p>
                        <button onClick={() => { context.action.setColor("pink")}}>색상 변경</button>
                    </>
                 )}
            </ColorConsumer>
        </div>
    );
};

export default ChildComponent;