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
    const { name, age, data } = props;
    console.log("Props in ToDoData:", props);
    return (
        <div className="todo-data">
            <div>Learning React</div>
            <div>Watching Youtube</div>
            <div>My name is {name}</div>
        </div>
    )
}
export default ToDoData;