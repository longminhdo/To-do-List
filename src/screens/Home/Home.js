import React, { useEffect, useState } from "react";
import Todo from "../../components/Todo/Todo";
import TodoInput from "../../components/TodoInput/TodoInput";
import "./Home.css";
import * as data from "./../../dummyData.json";
import { Icon } from "@iconify/react";

const dummyData = Object.values(data);

export default function Home() {
    console.log(dummyData);
    const [list, setList] = useState(dummyData);

    const renderTodoList = () => {
        const renderedList = list
            .filter((el) => el.complete === false)
            .map((el) => (
                <li key={el.id}>
                    <Todo
                        id={el.id}
                        task={el.task}
                        status={el.complete}
                        list={list}
                        setList={setList}
                    />
                </li>
            ));
        return <ul>{renderedList}</ul>;
    };

    const renderCompletedList = () => {
        const renderedList = list
            .filter((el) => el.complete === true)
            .map((el) => (
                <li key={el.id}>
                    <Todo
                        id={el.id}
                        task={el.task}
                        status={el.complete}
                        list={list}
                        setList={setList}
                    />
                </li>
            ));
        return <ul>{renderedList}</ul>;
    };

    return (
        <div className="home-container">
            <div className="home-container__head">Todo</div>
            <TodoInput list={list} setList={setList} />
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
