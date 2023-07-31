import React from 'react'
import styled from 'styled-components';

const Todo = styled.div`

`
export const TodoItem = ({ listData, setListData }) => {
    return (
        <Todo>

            {listData.length === 0 && <p>리스트 데이터가 존재하지않습니다.</p>}

            {listData.map((item) => (
                <li id={item.id}>
                    <label>
                        <input type='checkbox' />
                        <span>{item.todo}</span>
                    </label>
                </li>
            ))}

        </Todo>
    );
};
