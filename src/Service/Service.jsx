import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080/"
});

export const getUser = async () => {
    const response = await instance.get("/users");
    const json = await response.data.users;
    return json;
}

export const insertUser = async (body) => {
    const response = await post("/users", body);
    const json = await response.data.users;
    return json;
}

export const deleteUser = async (id) => {
    const response = await instance.delete(`/users/id/${id}`)
    return response;
}

export const updateUser = async (id, body) => {
    const response = await instance.put(`/users/id/${id}`, body);
    return response;
}