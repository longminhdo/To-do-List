import React from "react";
import Todo from "../../components/Todo/Todo";
import TodoInput from "../../components/TodoInput/TodoInput";
import "./Home.css";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { todoListSelector } from "../../redux/selectors";

export default function Home() {
    const todoList = useSelector(todoListSelector);

    const renderTodoList = () => {
        const renderedList = todoList
            .filter((el) => el.completed === false)
            .map((el) => (
                <li key={el.id}>
                    <Todo id={el.id} task={el.task} status={el.completed} />
                </li>
            ));
        return <ul>{renderedList}</ul>;
    };

    const renderCompletedList = () => {
        const renderedList = todoList
            .filter((el) => el.completed === true)
            .map((el) => (
                <li key={el.id}>
                    <Todo id={el.id} task={el.task} status={el.completed} />
                </li>
            ));
        return <ul>{renderedList}</ul>;
    };

    return (
        <div className="home-container">
            <div className="home-container__head">Todo</div>
            <TodoInput />
            <div className="todo-field">{renderTodoList()}</div>
            <div className="completed-field">
                <div className="completed-field__head">
                    <Icon icon="akar-icons:chevron-down" />

                    <span>Completed</span>
                </div>
                {renderCompletedList()}
            </div>
        </div>
    );
}
