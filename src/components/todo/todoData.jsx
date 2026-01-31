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
    const { name, age, data, ToDoList, DeleteItem } = props;
    console.log("Props in ToDoData:", props);
    return (
        <div className="todo-data">
            {/* <div>My name is {name}</div> */}
            {ToDoList.map((item, index) => {
                return (
                    <div className="todo-item" key={item.id}>
                        {item.task}
                        <button onClick={() => DeleteItem(item.id)}>Delete</button>
                    </div>)
                // sử dụng id làm key từ backend vì cần key thì sẽ không bị render lại toàn bộ mà chỉ render lại những phần thay đổi dựa vào key
            })}
        </div>
    )
}
export default ToDoData;