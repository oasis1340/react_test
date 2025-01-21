import React from 'react';
import Component03 from './Component03';
import Component04 from './Component04';
// import Component01 from './Component01';
// import Component02 from './Component02';

// box 3개를 만들고 가로로 배치하기
// 단 box의 크기는 넓이 100px, 높이 100px, 백그라운드 컬러는 오렌지이다
// 모든 변수는 컨테이너에서 선언한다.

const Container = () => {

//   const containerStyle = {
//     display : "flex",
//     gap : "4px"
//   }

//   const boxStyle = {
//     width : "100px",
//     height : "100px",
//     backgroundColor : "orange"
//   }
  

  

  return (
    <div>
      {/* <Component01 name={name} />
      <Component02>
        <span style={{ backgroundColor : "blue" }} >안녕하세요!! 😎</span>

      </Component02> */}
      {/* <Component03 containerStyle={containerStyle} boxStyle={boxStyle} /> */}
      <Component04/>
    </div>
  );
};

export default Container;