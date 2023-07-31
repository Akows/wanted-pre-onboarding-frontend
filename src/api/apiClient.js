import axios from 'axios';

const header = {
    headers: {
        'Content-Type': 'application/json',
    },
};

const userSignUp = async (payload) => {
    return await axios.post(`${process.env.REACT_APP_API_URL}auth/signup`, payload, header);
};

const userLogin = async (payload) => {
    return await axios.post(`${process.env.REACT_APP_API_URL}auth/signin`, payload, header);
};

export { userSignUp, userLogin };