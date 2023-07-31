import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TodoList } from '../../components/todos/TodoList';
import { checkLogin } from '../../functions/userFunction';

const BackGrounds = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Todos = () => {

    // 페이지 이동용 useNavigate.
    const navigate = useNavigate();

    const logout = () => {
        const choice = window.confirm('정말 로그아웃 하시겠어요?');

        if (choice) {
            localStorage.removeItem('token');
            return;
        }
        else {
            return;
        };
    };

    // 페이지 렌더링시에 로그인 여부를 확인.
    useEffect(() => {
        checkLogin(navigate);

        // eslint-disable-next-line
    }, []);

    return (
        <BackGrounds>

            <button onClick={logout}>로그아웃</button>

            <TodoList />
        </BackGrounds>
    );
};