import React from 'react'
import styled from 'styled-components';
import { InputForm } from '../../components/user/InputForm';

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

    return (
        <BackGround>
            <FormBorder>

                <InputForm componentType='회원가입' />

            </FormBorder>
        </BackGround>
    );
};
