import React from "react";

const TodoForm = (props) => {
    // input is the value of the state.
    // setInput is a function that updates the value of the state.
    // ! const [state, setState] = useState(initialState);
    // Returns a stateful value, and a function to update it.
    // During the initial render, the returned state (state) is the same as
    // the value passed as the first argument(initialState).
    // The setState function is used to update the state.
    // It accepts a new state value and enqueues a re-render of the component.
    const [input, setInput] = React.useState(
        // auto fills old value into the text field if available
        props.edit ? props.edit.value : ""
    );

    // Auto focus on the text field
    const focusRef = React.useRef(null);

    //TESTssssssssssssssssss

    React.useEffect(() => {
        focusRef.current.focus();
    });

    const changeHandler = (event) => {
        // event.target represents a DOM element
        setInput(event.target.value);
    };

    // Testssssss

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
                placeholder={props.edit ? "Update todo" : "Add a todo"}
                value={input}
                name="text"
                className={props.edit ? "todo-input edit" : "todo-input"}
                onChange={changeHandler}
                ref={focusRef}
            />
            <button className="todo-button">
                {props.edit ? "Update" : "Add"}
            </button>
        </form>
    );
};

export default TodoForm;
