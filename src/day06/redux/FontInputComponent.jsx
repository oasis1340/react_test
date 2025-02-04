import React from 'react';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { inputBigger } from '../../modules/font';

// #2
// FontInputComponent
// "맛있는 점심 식사"
// 텍스트를 사용자에게 입력받은 폰트사이즈로 크기를 변경하기

// #3 
// rootReducer 적용시키기
// 10분

const FontInputComponent = () => {

  const inputFontSize = useSelector((state) => state.font.inputFontSize)
  const dispatch = useDispatch()

  const [value, onChangeValue] = useInput("")
  const onKeyDownChangeFontSize = (e) => {
    if(e.key === 'Enter'){
      console.log(value)
      dispatch(inputBigger(value))
    }
  }

  console.log(inputFontSize)
  
  return (
    <div>
      <input type="text" 
        onChange={onChangeValue} 
        onKeyDown={onKeyDownChangeFontSize}
        value={value} 
      />
      <p style={{fontSize : inputFontSize}}>맛있는 점심 식사🤣</p>
    </div>
  );
};

export default FontInputComponent;