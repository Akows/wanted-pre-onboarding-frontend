import React from 'react'
import styled from 'styled-components';

const AddForm = styled.div`
    width: 90%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

    & > input {
        width: 80%;
        height: 30px;

        border-radius: 15px;
        border: none;

        margin-bottom: 15px;
        font-size: 18px;
    };
    & > input::placeholder {
        text-align: center;
    };

    & > button {
        width: 15%;
        height: 33px;

        margin-left: 5px;

        font-size: 18px;
        font-weight: bolder;

        border-radius: 10px;
        border: none;
    };
`

export const TodoAdd = () => {
    return (
        <AddForm>
            <input data-testid="new-todo-input" placeholder='새롭게 추가할 내용을 입력해주세요.' />
            <button data-testid="new-todo-add-button">추가</button>
        </AddForm>
    );
};
