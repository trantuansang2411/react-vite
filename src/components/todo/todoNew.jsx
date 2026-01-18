const ToDoNew = (props) => {
    const { addNewToDo } = props;
    addNewToDo("Sang dep trai");
    const handleAddNewToDo = () => {
        // Logic to add new todo
        alert("Clicked Add New ToDo");
    }
    const handleInputChange = (name) => {
        console.log("Input changed:", name);
    }
    return (
        <div className="todo-new">
            <input type="text" placeholder="Enter your task" onChange={(event) => handleInputChange(event.target.value)} />
            <button type="submit"
                style={{ cursor: "pointer" }}
                onClick={handleAddNewToDo}
            >Add</button>
        </div>
    )
}
export default ToDoNew;