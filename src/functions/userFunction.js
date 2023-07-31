
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

const checkLogin = (navigate) => {
    const isLogin = localStorage.getItem('token');

    if (isLogin) {
        navigate('/todo');
    }
    else {
        navigate('/signin');
    };
};

export { checkValidate, checkLogin };