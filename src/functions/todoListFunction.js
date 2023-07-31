import { getTodo } from "../api/apiTodolist";

const getTodoList = async () => {
    try {
        const response = await getTodo();

        if (response.status !== 201) {
            throw new Error('회원가입 에러: ' + response.statusText);
        };

        console.log(response);

        return response.data;
    }
    catch (error) {
        alert(error.message);
    };
};

export { getTodoList };