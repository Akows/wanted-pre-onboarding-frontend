import { userLogin, userSignUp } from "../api/apiUser";

// 유효성 검사.
const checkValidate = (inputdata, checktype) => {

    // 이메일, 비밀번호 정규 표현식.
    const emailValidatePattern = /@/;
    const passwordValidatePattern = /^(.{8,})$/;

    // 유효성 검사.
    switch (checktype) {
        case 'email':
            return emailValidatePattern.test(inputdata);
        case 'password':
            return passwordValidatePattern.test(inputdata);
        default:
            return false;
    };
};

// 로그인 체크.
const checkLogin = (navigate) => {
    const isLogin = localStorage.getItem('token');

    if (isLogin) {
        navigate('/todo');
    }
    else {
        navigate('/signin');
    };
};

// 회원가입.
const signUp = async (navigate, inputData) => {
    try {
        const response = await userSignUp(inputData);

        // 회원가입 기능이 정상 동작하였을 경우 반환되는 코드는 201.
        // 201 이외의 코드는 에러로 간주하고 함수를 중단.
        if (response.status !== 201) {
            throw new Error('회원가입 에러: ' + response.statusText);
        };

        alert('회원가입이 완료되었습니다.');
        navigate('/signin');
    }
    catch (error) {
        alert(error.message);
    };
};

// 로그인.
const signIn = async (navigate, inputData) => {
    try {
        const response = await userLogin(inputData);

        // 로그인 기능이 정상 동작하였을 경우 반환되는 코드는 200.
        // 200 이외의 코드는 에러로 간주하고 함수를 중단.
        if (response.status !== 200) {
            throw new Error('로그인 에러: ' + response.statusText);
        };

        // 정상 로그인 되었으면 서버에서 반환되는 access_token를 받아 localStorage에 저장.
        localStorage.setItem('token', response.data.access_token);

        // 이후 todolist로 이동.
        alert('환영합니다.');
        navigate('/todo');
    }
    catch (error) {
        alert(error.message);
    };
};

export { checkValidate, checkLogin, signUp, signIn };