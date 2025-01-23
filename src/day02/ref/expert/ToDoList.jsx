import React, { useRef, useState } from 'react';

const ToDoList = () => {

    const [result, setResult] = useState([])
    const [checked, setChecked] = useState([])
    const inputRef = useRef([])

    const onClickToAdd = () => {
        setResult(
            result.concat({
                list : inputRef.current[0].value
            })
        )
        setChecked(checked.concat(false))
    }
    const onClickToRemove = () => {
        setResult(result.filter((result, i) => !checked[i]))
        setChecked(new Array(result.length -1).fill(false))
    }
      
    const onChangeCheckbox = (i) => {
        checked.splice(i, 1, !checked[i])
        setChecked(checked.concat())
    }
      
    const list = result.map(({list}, i) => {
        return (
          <li key={i}>
            <input type="checkbox"
              checked={checked[i]} 
              onChange={() => { onChangeCheckbox(i) }}
            />
            {`${list}`}
          </li>
        )
    })

    return (
        <div>
            <div>
                <input type="text" placeholder='일정을 작성해주세요' ref={(el) => {inputRef.current[0] = el}}/>
                <button onClick={onClickToAdd}>추가</button>
                <button onClick={onClickToRemove}>삭제</button>
            </div>
            <div> 
                <ul>
                    {list}
                </ul>
            </div>
        </div>
    );
};

export default ToDoList;