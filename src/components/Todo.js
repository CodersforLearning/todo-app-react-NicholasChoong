import React from "react";
import TodoForm from "./TodoForm";
import { MdClose, MdModeEdit } from "react-icons/md";

function Todo({ todos, completeTodo, removeTodo }) {
    const [edit, setEdit] = React.useState({
        id: null,
        value: "",
    });

    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? "todo-row complete" : "todo-row"}
            key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <MdClose
                    onClick={() => removeTodo(todo.id)}
                    className="delete-icon"
                />
                <MdModeEdit
                    onClick={() => setEdit(todo.id)}
                    className="edit-icon"
                />
            </div>
        </div>
    ));
}

export default Todo;
