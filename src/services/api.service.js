import axios from "./axios.customize";

const createUserAPI = (fullNameInput, emailInput, passwordInput, phoneInput) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        fullName: fullNameInput,
        email: emailInput,
        password: passwordInput,
        phone: phoneInput
    }
    return axios.post(URL_BACKEND, data);
}
const updateUserAPI = (_id, fullNameInput, phoneInput) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        _id: _id,
        fullName: fullNameInput,
        phone: phoneInput
    }
    return axios.put(URL_BACKEND, data);
}
const fetchAllUserAPI = () => {
    const URL_BACKEND = "/api/v1/user";
    return axios.get(URL_BACKEND);
}
const deleteAUser = (_id) => {
    const URL_BACKEND = `/api/v1/user/${_id}`;
    return axios.delete(URL_BACKEND);
}
const uploadAvatarUser = (file, folder) => {
    const URL_BACKEND = `/api/v1/file/upload`;
    let config = {
        headers: {
            "upload-type": folder,
            "Content-Type": "multipart/form-data"
        }
    }
    const bodyFormData = new FormData();
    bodyFormData.append("fileImg", file);
    return axios.post(URL_BACKEND, bodyFormData, config);
}
const updateAvatarAPI = (_id, fullName, phone, avatar) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        _id: _id,
        fullName: fullName,
        phone: phone,
        avatar: avatar
    }
    return axios.put(URL_BACKEND, data);
}
export { createUserAPI, updateUserAPI, fetchAllUserAPI, deleteAUser, uploadAvatarUser, updateAvatarAPI };