import React, { useState } from 'react'
import styled from 'styled-components';


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

    const [inputData, setInputData] = useState({
        email: '',
        password: '',
    });

    const [isEmailValidate, setIsEmailValidate] = useState(false);
    const [isPasswordValidate, setIsPasswordValidate] = useState(false);

    return (
        <Form>

            <p>{componentType}</p>

            <input data-testid="email-input" placeholder='이메일 주소를 입력해주세요' type='text' />

            <input data-testid="password-input" placeholder='비밀번호를 입력해주세요' />

            {isEmailValidate && isPasswordValidate ?
                <button data-testid="signup-button">{componentType}</button>
                :
                <button data-testid="signup-button">{componentType}</button>
            }

        </Form>
    );
};
