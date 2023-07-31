import React from 'react'
import styled from 'styled-components';

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

const InputForm = styled.div`
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

export const SignUp = () => {
    return (
        <BackGround>
            <FormBorder>

                <InputForm>

                    <p>회원가입</p>

                    <input data-testid="email-input" placeholder='이메일 주소를 입력해주세요' />

                    <input data-testid="password-input" placeholder='비밀번호를 입력해주세요' />

                    <button data-testid="signup-button">회원가입</button>

                </InputForm>

            </FormBorder>
        </BackGround>
    );
};
