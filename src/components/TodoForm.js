import React from "react";

function TodoForm() {
    // input is the vale of the state.
    // setInput is a function that updates the value of the state.
    const [input, setInput] = React.useState("");

    return (
        <form className="todo-form">
            <input
                type="text"
                placeholder="Add a todo"
                value={input}
                name="text"
                className="todo-input"
            />
            <button className="todo-button">Add</button>
        </form>
    );
}

export default TodoForm;
