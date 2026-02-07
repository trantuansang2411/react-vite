import { Button, Input, notification, Modal } from "antd";
import { useEffect, useState } from "react";
import { createUserAPI } from "../../services/api.service";

const FormUser = (props) => {
    const { loadUser } = props;
    const [fullNameInput, setFullnameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [phoneInput, setPhoneInput] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleCreate = async () => {
        const res = await createUserAPI(fullNameInput, emailInput, passwordInput, phoneInput);
        if (res.data) {
            notification.success({
                message: "Create User",
                description: "You created an user"
            })
            resetAndCloseModal();
            await loadUser();
        }
        else {
            notification.error({
                message: "Create Error User",
                description: JSON.stringify(res.message)
            })
            resetAndCloseModal();
        }
    }
    const resetAndCloseModal = () => {
        setFullnameInput("");
        setEmailInput("");
        setPasswordInput("");
        setPhoneInput("");
        setIsModalOpen(false);
    }
    return (
        <div className="user-form" style={{ margin: "10px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Table User</h3>
                <Button type="primary" onClick={() => setIsModalOpen(true)}>Create Button</Button>
            </div>
            <Modal
                title="Create User"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen} // điều khiển trạng thái modal biến này quản lý để cho react biết useState là true hay false
                onOk={() => handleCreate()}
                onCancel={() => setIsModalOpen(false)}
                maskClosable={false}
                okText={"Create"}
            >
                <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                    <div>
                        <span>FullName</span>
                        <Input placeholder="FullName" value={fullNameInput} onChange={(e) => setFullnameInput(e.target.value)} />
                    </div>
                    <div>
                        <span>Email</span>
                        <Input placeholder="Email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
                    </div>
                    <div>
                        <span>Password</span>
                        <Input.Password placeholder="Password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} />
                    </div>
                    <div>
                        <span>PhoneNumber</span>
                        <Input placeholder="PhoneNumber" value={phoneInput} onChange={(e) => setPhoneInput(e.target.value)} />
                    </div>
                </div>
            </Modal>
        </div>
    )
}
export default FormUser