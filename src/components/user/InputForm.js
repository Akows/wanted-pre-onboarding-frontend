import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { checkValidate, signIn, signUp } from '../../functions/userFunction';

const Form = styled.form`
    width: 95%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > p {
        width: 100%;
        height: 45px;

        font-size: 32px;
        font-weight: 800;
        color: #D3BC8E;

        text-align: center;
    };

    & > input {
        width: 100%;
        height: 30px;

        border: none;
        border-radius: 15px;

        margin-bottom: 15px;

        font-size: 18px;
    };
    // placeholder 부분만 중앙 정렬.
    & > input::placeholder {
        text-align: center;
    };


    & > button {
        width: 200px;
        height: 50px;

        border: none;
        border-radius: 10px;

        font-size: 18px;
        font-weight: 800;
        color: black;
    };
`;

export const InputForm = ({ componentType }) => {

    // 페이지 이동용 useNavigate.
    const navigate = useNavigate();

    // 입력 데이터 State.
    const [inputData, setInputData] = useState({
        email: '',
        password: '',
    });

    // 각 데이터의 유효성 체크 플래그 변수.
    const [isEmailValidate, setIsEmailValidate] = useState(false);
    const [isPasswordValidate, setIsPasswordValidate] = useState(false);

    // input 태그의 데이터 입력 이벤트.
    const onChangeInputData = (event) => {
        setInputData({ ...inputData, [event.target.id]: event.target.value });
    };

    // 입력한 데이터를 submit.
    const onSubmit = async (event) => {
        event.preventDefault();

        if (componentType === '회원가입') {
            signUp(navigate, inputData);
        }
        else if (componentType === '로그인') {
            signIn(navigate, inputData);
        };
    };

    // 유효성 검사.
    useEffect(() => {
        const isEmailValid = checkValidate(inputData.email, 'email');
        const isPasswordValid = checkValidate(inputData.password, 'password');
        setIsEmailValidate(isEmailValid);
        setIsPasswordValidate(isPasswordValid);
    }, [inputData.email, inputData.password]);

    return (
        <Form onSubmit={onSubmit}>

            <p>{componentType}</p>

            <input data-testid="email-input" placeholder='이메일 주소를 입력해주세요' type='text' onChange={onChangeInputData} id='email' />

            <input data-testid="password-input" placeholder='비밀번호를 입력해주세요' type='password' onChange={onChangeInputData} id='password' />

            {componentType === '회원가입' &&
                <>
                    {isEmailValidate && isPasswordValidate ?
                        <button data-testid="signup-button" type='submit'>{componentType}</button>
                        :
                        <button data-testid="signup-button" disabled>{componentType}</button>
                    }
                </>}

            {componentType === '로그인' &&
                <>
                    {isEmailValidate && isPasswordValidate ?
                        <button data-testid="signin-button" type='submit'>{componentType}</button>
                        :
                        <button data-testid="signin-button" disabled>{componentType}</button>
                    }
                </>}


        </Form>
    );
};
