const addTodo = (data) => {
    return {
        type: "todoList/addTodo",
        payload: data,
    };
};

const changeStatus = (data) => {
    return {
        type: "todoList/changeStatus",
        payload: data,
    };
};

const deleteTodo = (data) => {
    return {
        type: "todoList/deleteTodo",
        payload: data,
    };
};

export { addTodo, changeStatus, deleteTodo };
