import { useState } from "react";

const ToDoNew = (props) => {
    // useState Hook (getter/setter)
    // const valueInput = "Sang dep trai";
    const [valueInput, setValueInput] = useState("");
    const { addNewToDo } = props;
    // gọi từ cha 
    // addNewToDo("Sang dep trai");
    const handleAddNewToDo = () => {
        // Logic to add new todo
        addNewToDo(valueInput);
        setValueInput("");
    }
    const handleInputChange = (name) => {
        setValueInput(name);
    }
    return (
        <div className="todo-new">
            <input type="text" placeholder="Enter your task" onChange={(event) => handleInputChange(event.target.value)} value={valueInput} />
            <button type="submit"
                style={{ cursor: "pointer" }}
                onClick={handleAddNewToDo}
            >Add</button>
            <div>
                My text input is = {valueInput}
            </div>
        </div>
    )
}
export default ToDoNew;