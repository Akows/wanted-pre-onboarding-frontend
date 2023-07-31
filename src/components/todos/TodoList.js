import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getTodoList } from '../../functions/todoListFunction';
import { TodoAdd } from './TodoAdd';
import { TodoItem } from './TodoItem';

const TodoListForm = styled.div`
    width: 500px;
    height: 500px;

    margin-top: 80px;
    margin-bottom: 120px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    border: 1px solid gray;

    & > p {
        width: 100%;
        height: 45px;

        font-size: 32px;
        font-weight: 800;
        color: #D3BC8E;

        text-align: center;
    };
    & > p:nth-child(3) {
        width: 100%;
        height: 45px;

        font-size: 18px;
        font-weight: 800;
        color: #D3BC8E;

        text-align: center;
    };
`

export const TodoList = () => {

    const [listData, setListData] = useState([]);

    const getData = async () => {
        try {
            const response = await getTodoList();

            // response가 확실하게 존재하는지 검증한 뒤에 setState.
            if (response) {
                setListData(response);
            };

        }
        catch (error) {
            alert(error);
        };
    };

    useEffect(() => {
        getData();
    }, [])

    return (
        <TodoListForm>

            <p>TodoList</p>

            <TodoAdd getData={getData} />

            {listData.length === 0 && <p>리스트 데이터가 존재하지않습니다.</p>}

            {listData.map((item) => (
                <TodoItem item={item} getData={getData} />
            ))}

        </TodoListForm>
    );
};
