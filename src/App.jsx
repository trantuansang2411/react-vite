import "./components/todo/todo.css";
import ToDoData from "./components/todo/todoData.jsx";
import ToDoNew from "./components/todo/todoNew.jsx";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
const App = () => {
  //{key: value}
  const [ToDoList, setToDoList] = useState([
    // { id: 1, task: "Learning React" },
    // { id: 2, task: "Watching Youtube" }
  ]);
  const Sang = "Sang";
  const age = 20;
  const data = {
    address: "TPHCM",
    phone: "010-1234-5678"
  }
  const addNewToDo = (name) => {
    const newToDo = {
      id: ToDoList.length + 1,
      task: name
    }
    setToDoList([...ToDoList, newToDo]);
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
        ToDoList={ToDoList}
      />
      <div className="todo-image">
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  );
}

export default App
