import React from "react";
import Todo from "./Todo";

function TodoList() {
    // const initialTodos = () => JSON.parse(localStorage.getItem("todos")) || [];
    // const [todos, setTodos] = React.useState(initialTodos);
    const [todos, setTodos] = React.useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        // console.log(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos((previous) =>
            previous.map((item) => (item.id === todoId ? newValue : item))
        );
    };

    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const removeTodo = (id) => {
        const fileteredList = [...todos].filter((todo) => todo.id !== id);
        setTodos(fileteredList);
    };

    React.useEffect(() => {
        const items = JSON.parse(localStorage.getItem("todos"));
        if (items) {
            console.log(items);
            setTodos(items);
        }
    }, []); // The empty array never changes, so it doesnt trigger the function after calling it once.

    React.useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]); // Triggers the function, every time the todos array changes.

    // Passing in 4 arguments into Todo as it has 4 parameters.
    return (
        <div>
            <Todo
                onSubmit={addTodo}
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    );
}

export default TodoList;
