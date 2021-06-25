import React from "react";
import TodoForm from "./TodoForm";
import { MdClose, MdModeEdit } from "react-icons/md";

// { todos, completeTodo, removeTodo, updateTodo }
// Deconstruct the props
// Props are arguments passed into React components
// props.<argument> to call the function or variable
function Todo(props) {
    const [edit, setEdit] = React.useState({
        id: null,
        value: "",
    });

    const submitUpdate = (value) => {
        props.updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: "",
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return (
        <div>
            <TodoForm onSubmit={props.onSubmit} />
            {props.todos.map((todo, index) => (
                <div
                    className={
                        todo.isComplete ? "todo-row complete" : "todo-row"
                    }
                    key={index}
                >
                    <div
                        key={todo.id}
                        onClick={() => props.completeTodo(todo.id)}
                    ></div>
                    {todo.text}
                    <div className="icons">
                        <MdModeEdit
                            onClick={() =>
                                setEdit({ id: todo.id, value: todo.text })
                            }
                            className="edit-icon"
                        />
                        <MdClose
                            onClick={() => props.removeTodo(todo.id)}
                            className="delete-icon"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Todo;
