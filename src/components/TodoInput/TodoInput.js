import React, { useState } from "react";
import "./TodoInput.css";
import { v4 as uuidv4 } from "uuid";

export default function TodoInput({ list, setList }) {
    const [input, setInput] = useState("");
    const [error, setError] = useState({ status: false, text: "" });
    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validation = validateInput(input);

        if (validation.status) {
            setError({ status: false });
            const newTodo = {
                id: uuidv4(),
                task: input,
                complete: false,
            };
            const newTodoList = [...list];
            newTodoList.unshift(newTodo);

            setList(newTodoList);
        } else {
            setError({ status: true, text: validation.text });
        }
        setInput("");
    };

    const validateInput = (input) => {
        if (!input || input.trim().length === 0) {
            return { status: false, text: "Empty Todo Input" };
        }
        if (input.length > 255) {
            return { status: false, text: "Todo must be under 255 characters" };
        }
        return { status: true, text: "Success" };
    };

    return (
        <form className="todo-input" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Be productive..."
                value={input}
                onChange={handleInputChange}
            ></input>
            <p className={`${error.status ? "" : "display-none"}`}>
                {error.text}
            </p>
        </form>
    );
}
