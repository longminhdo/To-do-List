import React from "react";
import "./Todo.css";
import { Icon } from "@iconify/react";

export default function ({ id, task, status, list, setList }) {
    const handleStatusOnClick = () => {
        const newTodoList = list.map((todo) => {
            if (todo.id === id) {
                todo.complete = !status;
            }
            return todo;
        });

        setList(newTodoList);
    };

    const handleRemoveOnClick = () => {
        const newTodoList = list.filter((todo) => {
            if (todo.id !== id) {
                return todo;
            }
        });

        setList(newTodoList);
    };
    return (
        <div className={`todo  ${status ? "completed" : ""}`}>
            <div className="todo__stereo" onClick={handleStatusOnClick}>
                {!status ? (
                    <Icon icon="akar-icons:circle" />
                ) : (
                    <Icon icon="akar-icons:circle-check-fill" />
                )}
            </div>
            <div className="todo__content ">
                <p>{task}</p>
            </div>
            <div className="todo__functions">
                <div
                    className="todo__functions-delete"
                    onClick={handleRemoveOnClick}
                >
                    <Icon icon="bi:x-lg" />
                </div>
            </div>
        </div>
    );
}
