import { apiClient } from './apiClient';

// todo 작성.
const addTodo = async (payload) => {
    return await apiClient.post('/todos', payload);
};

// todo 조회.
const getTodo = async () => {
    return await apiClient.get('todos');
};

// todo 수정.
const updateTodo = async (id, payload) => {
    return await apiClient.put(`todos/${id}`, payload);
};

// todo 삭제.
const deleteTodo = async (id) => {
    return await apiClient.delete(`todos/${id}`);
};

// 이전 버전 코드.
// 참고용도로 삭제하지는 않고 전체 주석처리.
// 이전 버전의 경우 토큰이 웹 스토리지에 존재함에도, 이를 제대로 가져오기 전에 서버에 요청을 먼저 보내어..
// 토큰이 없는 상황에서 서버에 인증을 요청하여 지속적으로 문제를 발생시켰음.

// import axios from 'axios';

// const token = localStorage.getItem('token');

// const header = {
//     headers: {
//         Authorization: `Bearer ${token}`,
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//     },
// };

// // todo 작성.
// const addTodo = async (payload) => {
//     return await axios.post(`${process.env.REACT_APP_API_URL}todos`, payload, header);
// };

// // todo 조회.
// const getTodo = async () => {
//     return await axios.get(`${process.env.REACT_APP_API_URL}todos`, header);
// };

// // todo 수정.
// const updateTodo = async (id, payload) => {
//     return await axios.put(`${process.env.REACT_APP_API_URL}todos/${id}`, payload, header);
// };

// // todo 삭제.
// const deleteTodo = async (id) => {
//     return await axios.delete(`${process.env.REACT_APP_API_URL}todos/${id}`, header);
// };


export { addTodo, getTodo, updateTodo, deleteTodo };