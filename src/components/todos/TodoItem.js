import React, { useState } from 'react'
import styled from 'styled-components';
import { deleteTodoList, updateTodoList } from '../../functions/todoListFunction';

const Todo = styled.div`
    width: 100%;
    height: 30px;

    margin-left: 10px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > li {
        width: 100%;
        height: 100%;

        margin-left: 15px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    };

    & > li > label > input {
        width: 20px;
        height: 100%;
    };

    & > li > label > input:nth-child(2) {
        width: 100px;
        height: 100%;
    };

    & > li > label > span {
        font-size: 20px;
        font-weight: 500;
        color: #D3BC8E;
    };

    & > li > button {
        width: 40px;
        height: 30px;
        
        margin: 3px;
        
        font-size: 12px;
        font-weight: bolder;
        color: black;
    };
`
export const TodoItem = ({ item, getData }) => {

    const [isEdit, setIsEdit] = useState(false);

    const [inputData, setInputData] = useState(item.todo);

    const onChange = (event) => {
        setInputData(event.target.value);
    };

    // 완료체크.
    const onCompleteCheck = () => {
        const body = {
            todo: item.todo,
            isCompleted: !item.isCompleted
        };

        // 수정이 이루어진 다음에 다시 데이터를 서버에서 받아와야 한다.
        // 비동기 통신 2개가 순서대로 이루어져야 하므로 then 문을 사용한다.
        updateTodoList(item.id, body)
            .then(() => {
                getData();
            });
    };

    // 수정.
    const onUpdate = () => {
        // 완료체크 기능이 따로 존재함에도 수정 기능의 body에서 isCompleted를 다시 사용하는 이유.
        // isCompleted should not be empty. 서버에서 수정기능 사용시 isCompleted 요소가 반드시 존재해야하기 때문.
        const body = {
            todo: inputData,
            isCompleted: item.isCompleted
        };

        updateTodoList(item.id, body)
            .then(() => {
                getData();
                setIsEdit(false);
            });
    };

    // 삭제.
    const onDelete = () => {
        const choice = window.confirm('정말 삭제 하시겠어요?');

        if (choice) {
            deleteTodoList(item.id)
                .then(() => {
                    getData();
                });
            return;
        }
        else {
            return;
        };
    };

    // 수정 취소.
    // 값을 수정했는데, 이를 취소했을 때를 대비하기 위해 inputData를 초기값으로 되돌려주어야 한다.
    const updateCancel = () => {
        setIsEdit(false);
        setInputData(item.todo);
    };

    return (
        <Todo>
            <li id={item.id}>
                <label>
                    <input type='checkbox' checked={item.isCompleted} onChange={onCompleteCheck} />
                    {isEdit ?
                        <input data-testid="modify-input" value={inputData} onChange={onChange} />
                        :
                        <span>{inputData}</span>
                    }

                </label>

                {isEdit ?
                    <>
                        <button data-testid="submit-button" onClick={() => onUpdate()}>제출</button>
                        <button data-testid="cancel-button" onClick={() => updateCancel()}>취소</button>
                    </>
                    :
                    <>
                        <button data-testid="modify-button" onClick={() => setIsEdit(true)}>수정</button>
                        <button data-testid="delete-button" onClick={() => onDelete()}>삭제</button>
                    </>
                }

            </li>
        </Todo>
    );
};
