import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { InputForm } from '../../components/user/InputForm';
import { checkLogin } from '../../functions/userFunction';

const BackGround = styled.div`
    width: 100%;
    height: 100vh;

    background-color: rgba( 65, 71, 89, 1 );

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const FormBorder = styled.div`
    width: 500px;
    height: 300px;

    border: 1px solid gray;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > p {
        font-size: 15px;
        font-weight: bolder;
        color: #D3BC8E;
    };

    & > p > a {
        text-decoration: underline;
        font-weight: 100;
        color: #D3BC8E;
    };
`;

export const Login = () => {

    // 페이지 이동용 useNavigate.
    const navigate = useNavigate();

    // 페이지 경로 확인용 useLocation.
    const location = useLocation();

    // 페이지 렌더링시에 로그인 여부를 확인.
    useEffect(() => {
        checkLogin(navigate, location);

        // eslint-disable-next-line
    }, []);

    return (
        <BackGround>
            <FormBorder>

                <InputForm componentType='로그인' />

                <p>계정이 없으신가요? <Link to='/signup'>회원가입으로..</Link> </p>

            </FormBorder>
        </BackGround>
    );
};
