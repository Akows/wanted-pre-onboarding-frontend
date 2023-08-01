import { apiClient } from './apiClient';

// 회원가입.
const userSignUp = async (payload) => {
    return await apiClient.post('/auth/signup', payload);
};

// 로그인.
const userLogin = async (payload) => {
    return await apiClient.post('/auth/signin', payload);
};

// 이전 버전 코드.
// 참고용도로 삭제하지는 않고 전체 주석처리.
// 이전 버전의 경우 토큰이 웹 스토리지에 존재함에도, 이를 제대로 가져오기 전에 서버에 요청을 먼저 보내어..
// 토큰이 없는 상황에서 서버에 인증을 요청하여 지속적으로 문제를 발생시켰음.

// import axios from 'axios';

// const header = {
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//     },
// };

// // 회원가입.
// const userSignUp = async (payload) => {
//     return await axios.post(`${process.env.REACT_APP_API_URL}auth/signup`, payload, header);
// };

// // 로그인.
// const userLogin = async (payload) => {
//     return await axios.post(`${process.env.REACT_APP_API_URL}auth/signin`, payload, header);
// };

export { userSignUp, userLogin };