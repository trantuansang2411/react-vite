import "./components/todo/todo.css";
import ToDoData from "./components/todo/todoData.jsx";
import ToDoNew from "./components/todo/todoNew.jsx";
import reactLogo from "./assets/react.svg";
const App = () => {
  //{key: value}
  const Sang = "Sang";
  const age = 20;
  const data = {
    address: "TPHCM",
    phone: "010-1234-5678"
  }
  const addNewToDo = (name) => {
    alert(`Add new todo for ${name}`);
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <ToDoNew
        addNewToDo={addNewToDo}
      />
      <ToDoData
        name={Sang}
        age={age}
        data={data}
      />
      <div className="todo-image">
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  );
}

export default App
