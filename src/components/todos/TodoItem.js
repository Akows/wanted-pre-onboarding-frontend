import React from 'react'
import styled from 'styled-components';

const Todo = styled.div`

`
export const TodoItem = ({ item }) => {
    return (
        <Todo>

            <li id={item.id}>
                <label>
                    <input type="checkbox" />
                    <span>TODO 1</span>
                </label>
            </li>

        </Todo>

    );
};
