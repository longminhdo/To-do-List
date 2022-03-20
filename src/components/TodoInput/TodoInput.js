import React, { useEffect, useState } from "react";
import "./TodoInput.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions";

export default function TodoInput() {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const [validation, setValidation] = useState({ isValid: true, text: "" });

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    useEffect(() => {
        const check = validateInput(input);

        if (check.isValid) {
            setValidation({ isValid: true, text: "" });
        } else {
            setValidation(check);
        }
    }, [input]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validation.isValid) {
            dispatch(
                addTodo({
                    id: uuidv4(),
                    task: input,
                    completed: false,
                })
            );
            setInput("");
        }
    };

    const validateInput = (input) => {
        if (!input) {
            return { isValid: false, text: "" };
        }
        if (input.trim().length === 0) {
            return {
                isValid: false,
                text: "Todo can not contain only blank spaces",
            };
        }
        if (input.length > 255) {
            return {
                isValid: false,
                text: "Todo must be under 255 characters",
            };
        }
        return { isValid: true, text: "Success" };
    };

    return (
        <form className="todo-input" onSubmit={handleSubmit}>
            <input type="text" placeholder="Be productive..." value={input} onChange={handleInputChange}></input>
            <p className={validation.isValid ? "display-none" : ""}>{validation.text}</p>
        </form>
    );
}
