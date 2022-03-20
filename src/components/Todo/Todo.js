import React from "react";
import "./Todo.css";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { todoListSelector } from "../../redux/selectors";
import { changeStatus, deleteTodo } from "../../redux/actions";

export default function Todo({ id, task, status }) {
    const dispatch = useDispatch();
    const todoList = useSelector(todoListSelector);

    const handleStatusChange = () => {
        const newTodoList = todoList.map((todo) => {
            if (todo.id === id) {
                todo.completed = !status;
            }
            return todo;
        });

        dispatch(changeStatus(newTodoList));
    };

    const handleDelete = () => {
        const newTodoList = todoList.filter((todo) => {
            if (todo.id !== id) {
                return todo;
            }
        });

        dispatch(deleteTodo(newTodoList));
    };
    return (
        <div className={`todo  ${status ? "completed" : ""}`}>
            <div className="todo__stereo" onClick={handleStatusChange}>
                {!status ? <Icon icon="akar-icons:circle" /> : <Icon icon="akar-icons:circle-check-fill" />}
            </div>
            <div className="todo__content ">
                <p>{task}</p>
            </div>
            <div className="todo__functions">
                <div className="todo__functions-delete" onClick={handleDelete}>
                    <Icon icon="bi:x-lg" />
                </div>
            </div>
        </div>
    );
}
