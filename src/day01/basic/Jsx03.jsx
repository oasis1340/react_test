// name과 age를 입력 후 화면에 랜더링 시키기 실습.
import React from "react";

export default function Jsx03 () {
    
    let name = prompt("이름을 입력해주세요")
    let age = prompt("나이을 입력해주세요")
    
    return (
        <React.Fragment>
            저의 이름은 {name}이고, 나이는 {age}살 입니다.
        </React.Fragment>

    )

}