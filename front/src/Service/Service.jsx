import axios from "axios";

const instance = axios.create({
    baseURL: "https://challengemedcloud.fly.dev"
});

export const getUser = async () => {
    const response = await instance.get("/users");
    const{users} = response.data
    return users;
}

export const insertUser = async (body) => {
    const response = await instance.post("/users", body);
    const{users} = response.data
    return users;
}

export const deleteUser = async (id) => {
    const response = await instance.delete(`/users/id/${id}`)
    return response;
}

export const updateUser = async (id, body) => {
    const response = await instance.put(`/users/id/${id}`, body);
    return response;
}