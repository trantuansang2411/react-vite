const ToDoData = (props) => {
    // props là 1 object {}
    // {
    //     name = "Sang",
    //         age : 20,
    //         data : {
    //             address: "TPHCM",
    //             phone: "010-1234-5678"
    //         }
    // }
    const { name, age, data, ToDoList } = props;
    console.log("Props in ToDoData:", props);
    return (
        <div className="todo-data">
            {/* <div>My name is {name}</div> */}
            {ToDoList.map((item, index) => {
                return (
                    <div className="todo-item">
                        {item.task}
                        <button>Delete</button>
                    </div>)
            })}
            <div>
                {JSON.stringify(ToDoList)}
            </div>
        </div>
    )
}
export default ToDoData;