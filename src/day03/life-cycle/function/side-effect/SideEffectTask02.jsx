import React, { useEffect, useState } from 'react';

const SideEffectTask02 = () => {

// https://jsonplaceholder.typicode.com/todos
// todos에서 false인 todos만
// 내림차순으로 변경 후 10개만 가져와서 화면에 타이틀을 출력한다.

    const [todos, setTodos] = useState([])

    useEffect(() => {
        const getDatas = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos")
            if(!response.ok){
                throw new Error("데이터를 불러올 수 없습니다.")
            }
            const datas = await response.json()

            setTodos(datas.filter((a, i) => a.completed == false).reverse().slice(0, 10)) 
        }
        getDatas().catch(console.error)
    }, [])


    const todoList = todos.length && todos.map((ten, i) => <li key={i}>{ten.title}</li>)

    return (
        <div>
            <ul>
                {todoList}
            </ul>
        </div>
    );
};

export default SideEffectTask02;