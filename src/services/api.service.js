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
const updateUserAPI = () => {

}
const fetchAllUserAPI = () => {
    const URL_BACKEND = "/api/v1/user";
    return axios.get(URL_BACKEND);
}
export { createUserAPI, updateUserAPI, fetchAllUserAPI };