import { addTodo, getTodo, updateTodo } from "../api/apiTodolist";

// todolist 추가하기.
const addTodoList = async (inputdata) => {
    try {
        const response = await addTodo(inputdata);

        if (response.status !== 201) {
            throw new Error('에러: ' + response.statusText);
        };
    }
    catch (error) {
        alert(error);
    };
};

// todolist 가져오기.
const getTodoList = async () => {
    try {
        const response = await getTodo();

        if (response.status !== 200) {
            throw new Error('에러: ' + response.statusText);
        };

        return response.data;
    }
    catch (error) {
        alert(error);
    };
};

// todolist 수정하기.
const updateTodoList = async (id, data) => {
    try {
        const response = await updateTodo(id, data);

        if (response.status !== 200) {
            throw new Error('에러: ' + response.statusText);
        };
    }
    catch (error) {
        alert(error);
    };
};

export { addTodoList, getTodoList, updateTodoList };