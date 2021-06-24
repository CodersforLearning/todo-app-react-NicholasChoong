import "./App.css";
import TodoForm from "./components/TodoForm";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Todo List</h1>
                <TodoForm />
            </header>
        </div>
    );
}

export default App;
