import "./App.css";
import TodoList from "./components/TodoList";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Todo List</h1>
                <TodoList />
            </header>
        </div>
    );
};

export default App;
