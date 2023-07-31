import axios from 'axios';

const token = localStorage.getItem('token');

const header = {
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
};

// todo 작성.
const addTodo = async (payload) => {
    return await axios.post(`${process.env.REACT_APP_API_URL}todos`, payload, header);
};

// todo 조회.
const getTodo = async () => {
    return await axios.get(`${process.env.REACT_APP_API_URL}todos`, header);
};

// todo 수정.
const updateTodo = async (id, payload) => {
    return await axios.put(`${process.env.REACT_APP_API_URL}todos/${id}`, payload, header);
};

// todo 삭제.
const deleteTodo = async (id, payload) => {
    return await axios.delete(`${process.env.REACT_APP_API_URL}todos/${id}`, payload, header);
};

export { addTodo, getTodo, updateTodo, deleteTodo };