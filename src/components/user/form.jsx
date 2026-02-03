import { Button, Input } from "antd"
import { useState } from "react"
const FormUser = () => {
    const [fullNameInput, setFullnameInput] = useState("");
    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [phoneInput, setPhoneInput] = useState("")
    const handleClick = () => {
        console.log("Check user", { fullNameInput, emailInput, passwordInput, phoneInput })
    }
    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
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
                <div>
                    <Button type="primary" onClick={handleClick}>Create Button</Button>
                </div>
            </div>
        </div>
    )
}
export default FormUser