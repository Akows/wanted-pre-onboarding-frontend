import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TodoList } from '../../components/todos/TodoList';
import { checkLogin } from '../../functions/userFunction';

const BackGrounds = styled.div`
    width: 100%;
    height: 100%;

    background-color: rgba( 65, 71, 89, 1 );

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > button {
        width: 200px;
        height: 50px;

        margin-top: 50px;

        border: none;
        border-radius: 10px;

        font-size: 18px;
        font-weight: 800;
        color: black;
    };
`

export const Todos = () => {

    // 페이지 이동용 useNavigate.
    const navigate = useNavigate();

    // 페이지 경로 확인용 useLocation.
    const location = useLocation();

    const [isLoading, setIsLoading] = useState(true);

    const logout = () => {
        const choice = window.confirm('정말 로그아웃 하시겠어요?');

        if (choice) {
            localStorage.removeItem('token');
            navigate('/signin');
            return;
        }
        else {
            return;
        };
    };

    // 페이지 렌더링시에 로그인 여부를 확인.
    useEffect(() => {
        checkLogin(navigate, location);

        const isLogin = localStorage.getItem('token');

        if (isLogin) {
            setIsLoading(false);
        }
        else {
            setIsLoading(true);
        };

        // eslint-disable-next-line
    }, []);

    return (
        <BackGrounds>

            <button onClick={logout}>로그아웃하기</button>

            {isLoading ?
                'loading...'
                :
                <TodoList />
            }

        </BackGrounds>
    );
};
