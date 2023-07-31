import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
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
`;

export const SignUp = () => {

    // 페이지 이동용 useNavigate.
    const navigate = useNavigate();

    // 페이지 렌더링시에 로그인 여부를 확인.
    useEffect(() => {
        checkLogin(navigate);

        // eslint-disable-next-line
    }, []);

    return (
        <BackGround>
            <FormBorder>

                <InputForm componentType='회원가입' />

            </FormBorder>
        </BackGround>
    );
};
