import { useEffect, useState } from "react";
import { Input, notification, Modal } from "antd";
import { createUserAPI } from "../../services/api.service";
const UpdateForm = (props) => {
    const { isModalUpdateOpen, SetIsModalUpdateOpen, dataUpdate, SetDataUpdate } = props;
    const [id, setId] = useState("");
    const [fullNameInput, setFullnameInput] = useState("");
    const [phoneInput, setPhoneInput] = useState("");

    // nếu next dataUpdate != previous dataUpdate thì sẽ useEffect lại bằng cách để giá trị trong dep
    useEffect(() => {
        console.log("Check record", dataUpdate);
        if (dataUpdate) {
            setId(dataUpdate._id);
            setFullnameInput(dataUpdate.fullName);
            setPhoneInput(dataUpdate.phone);
        }
    }, [dataUpdate])
    const handleCreate = async () => {
        const res = await createUserAPI(fullNameInput, emailInput, passwordInput, phoneInput);
        if (res.data) {
            notification.success({
                message: "Update User",
                description: "You updated an user"
            })
            resetAndCloseModal();
            // await loadUser();
        }
        else {
            notification.error({
                message: "Update Error User",
                description: JSON.stringify(res.message)
            })
            resetAndCloseModal();
        }
    }
    const resetAndCloseModal = () => {
        setId("");
        setFullnameInput("");
        setPhoneInput("");
        SetIsModalUpdateOpen(false);
        SetDataUpdate(null);
    }
    return (
        <Modal
            title="Update An User"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalUpdateOpen} // điều khiển trạng thái modal biến này quản lý để cho react biết useState là true hay false
            onOk={() => handleCreate()}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText={"Save"}
        >
            <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                <div>
                    <span>ID</span>
                    <Input placeholder="ID" disabled value={id} onChange={(e) => setId(e.target.value)} />
                </div>
                <div>
                    <span>FullName</span>
                    <Input placeholder="FullName" value={fullNameInput} onChange={(e) => setFullnameInput(e.target.value)} />
                </div>
                <div>
                    <span>PhoneNumber</span>
                    <Input placeholder="PhoneNumber" value={phoneInput} onChange={(e) => setPhoneInput(e.target.value)} />
                </div>
            </div>
        </Modal>
    )
}
export default UpdateForm