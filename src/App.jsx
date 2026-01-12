import "./components/todo/todo.css";
import ToDoData from "./components/todo/todoData.jsx";
import ToDoNew from "./components/todo/todoNew.jsx";
import reactLogo from "./assets/react.svg";
const App = () => {
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <ToDoNew />
      <ToDoData />
      <div className="todo-image">
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  );
}

export default App
