
import { Button, Drawer, notification } from "antd";
import { useState } from "react";
import { updateAvatarAPI, uploadAvatarUser } from "../../services/api.service";
const DetailUser = (props) => {
    const { isModalDetail, setIsModalDetail, dataDetail, setDataDetail, loadUser } = props;
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const handleOnChangeFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(null);
            setPreview(null);
            return;
        }
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
        console.log("Check file", preview);
    }
    const handleSave = async () => {
        // step 1: upload file
        const resUpload = await uploadAvatarUser(selectedFile, "avatar");
        if (resUpload.data) {
            //success
            const newAvatar = resUpload.data.fileUploaded;
            const resUpdateAvatar = await updateAvatarAPI(dataDetail._id, dataDetail.fullName, dataDetail.phone, newAvatar);
            if (resUpdateAvatar.data) {
                setIsModalDetail(false);
                setSelectedFile(null);
                setPreview(null);
                await loadUser();
                notification.success({
                    message: "Upload ảnh thành công",
                    description: "Cập nhật thành công"
                })

            } else {
                notification.error({
                    message: "Upload ảnh thất bại",
                    description: JSON.stringify(resUpdateAvatar.message)
                })
            }
            console.log("Check file", newAvatar);
        } else {
            //failed
            notification.error({
                message: "Upload ảnh thất bại",
                description: JSON.stringify(resUpload.message)
            })
        }
        // step 2: save file
    }
    return (
        <>
            <Drawer
                width={"40vw"}
                title="Basic Drawer"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={() => {
                    setIsModalDetail(false)
                    setDataDetail(null)
                }}
                open={isModalDetail}
            >
                {dataDetail ? <>
                    <p>ID: {dataDetail._id}</p>
                    <br />
                    <p>FullName: {dataDetail.fullName}</p>
                    <br />
                    <p>Email: {dataDetail.email}</p>
                    <br />
                    <p>Phone: {dataDetail.phone}</p>
                    <br />
                    <p>Avatar: </p>
                    <div style={{ marginTop: "10px", height: "100px", width: "150px", border: "1px solid #ccc" }}>
                        <img style={{ width: "100%", height: "100%", objectFit: "contain" }} src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} />
                    </div>
                    <div>
                        <label htmlFor="btnUpload"
                            style={{ display: "block", width: "fit-content", marginTop: "15px", padding: "5px 10px", background: "orange", borderRadius: "5px", cursor: "pointer" }}
                        >Upload Avatar</label>
                        <input type="file" hidden id="btnUpload"
                            onChange={(e) => handleOnChangeFile(e)}
                        />
                    </div>
                    {preview &&
                        <>
                            <div style={{ marginTop: "10px", height: "100px", width: "150px", border: "1px solid #ccc" }}>
                                <img style={{ width: "100%", height: "100%", objectFit: "contain" }} src={preview} />
                            </div>
                            <br />
                            <Button type="primary" onClick={() => handleSave()}> Save </Button>
                        </>
                    }
                </> :
                    <p>Không có dữ liệu</p>
                }
            </Drawer >
        </>
    );
}
export default DetailUser