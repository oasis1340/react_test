import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bigger } from '../../modules/font';


// #1
// FontButtonComponent
// "재밌는 리덕스 수업"
// 텍스트 글자 폰트 기본 크기 1rem, 버튼을 클릭하면 3rem으로 변경하기
const FontButtonComponent = () => {

  const fontSize = useSelector((state) => state.font.fontSize)
  const dispatch = useDispatch();

  const onClickToBigger = () => {
    dispatch(bigger())
  }

  return (
    <div>
      <p style={{fontSize : fontSize}}>재밌는 리덕스 수업😎</p>
      <button onClick={onClickToBigger}>3rem 버튼</button>
    </div>
  );
};

export default FontButtonComponent;