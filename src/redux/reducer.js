const initialState = {
    todoList: [
        {
            id: 1,
            task: "Give dog a bath",
            completed: true,
        },
        {
            id: 2,
            task: "Do laundry",
            completed: true,
        },
        {
            id: 3,
            task: "Vacuum floor",
            completed: false,
        },
        {
            id: 4,
            task: "Feed cat",
            completed: true,
        },
        {
            id: 5,
            task: "Change light bulbs",
            completed: false,
        },
        {
            id: 6,
            task: "Go to Store",
            completed: true,
        },
    ],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "todoList/addTodo":
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
            };

        case "todoList/changeStatus":
            return { ...state, todoList: action.payload };

        case "todoList/deleteTodo":
            return { ...state, todoList: action.payload };

        default:
            return state;
    }
};

export default reducer;
