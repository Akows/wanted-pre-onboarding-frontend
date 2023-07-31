import React, { useEffect } from 'react'
import styled from 'styled-components';

const TodoListForm = styled.div`
    width: 500px;
    height: 100%;

    margin-top: 150px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 1px solid gray;

    & > p {
        width: 100%;
        height: 45px;

        font-size: 32px;
        font-weight: 800;
        color: #D3BC8E;

        text-align: center;
    };

    & > input {
        width: 80%;
        height: 30px;

        border: 1px solid gray;
        border-radius: 15px;

        margin-bottom: 15px;

        font-size: 18px;
    };
    // placeholder 부분만 중앙 정렬.
    & > input::placeholder {
        text-align: center;
    };
`

export const TodoList = () => {

    useEffect(() => {

    }, [])

    return (
        <TodoListForm>

            <p>TodoList</p>

            <input data-testid="new-todo-input" />
            <button data-testid="new-todo-add-button">추가</button>

            <li>
                <label>
                    <input type="checkbox" />
                    <span>TODO 1</span>
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" />
                    <span>TODO 2</span>
                </label>
            </li>

        </TodoListForm>
    );
};
