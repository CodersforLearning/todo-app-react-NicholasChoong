import React from "react";

function TodoForm(props) {
    // input is the vale of the state.
    // setInput is a function that updates the value of the state.
    // ! const [state, setState] = useState(initialState);
    // Returns a stateful value, and a function to update it.
    // During the initial render, the returned state (state) is the same as
    // the value passed as the first argument(initialState).
    // The setState function is used to update the state.
    // It accepts a new state value and enqueues a re - render of the component.
    const [input, setInput] = React.useState("");

    // Auto focus on the text field
    const focusRef = React.useRef(null);

    React.useEffect(() => {
        focusRef.current.focus();
    });

    const changeHandler = (event) => {
        // event.target represents a DOM element
        setInput(event.target.value);
    };

    // Submit button sends the form and refreshes the page,
    // so this handler is used to prevent it from submitting the form,
    // thereby stopping the page from refreshing.
    const submitHandler = (event) => {
        event.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input,
        });

        // Clears the input field after an item is added.
        setInput("");
    };

    return (
        <form className="todo-form" onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="Add a todo"
                value={input}
                name="text"
                className="todo-input"
                onChange={changeHandler}
                ref={focusRef}
            />
            <button className="todo-button">Add</button>
        </form>
    );
}

export default TodoForm;
