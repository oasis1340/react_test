import React from 'react';
import FontButtonComponent from './FontButtonComponent';
import FontInputComponent from './FontInputComponent';

// #1
// FontButtonComponent
// "재밌는 리덕스 수업"
// 텍스트 글자 폰트 기본 크기 1rem, 버튼을 클릭하면 3rem으로 변경하기

// #2
// FontInputComponent
// "맛있는 점심 식사"
// 텍스트를 사용자에게 입력받은 폰트사이즈로 크기를 변경하기

const FontContainer = () => {
    return (
        <div>
            <FontButtonComponent />
            <FontInputComponent />
        </div>
    );
};

export default FontContainer;