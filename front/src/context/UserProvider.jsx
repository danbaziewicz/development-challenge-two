import React, {createContext, useState} from "react";
import {insertUser} from "../Service/Service.jsx"

export const UserContext = createContext();

const UserProvider = ({children}) => {
    const [dataForm, setDataForm] = useState({
        name: "",
        birth_date: null,
        email: "",
        address: "",
    })

    const [userList, setUserList] = useState([]);

    function handleChange(value, key) {
        setDataForm({...dataForm, [key]: value});
    }

    function resetDataForm() {
        setDataForm({
            name: "",
            birth_date: null,
            email: "",
            address: ""
        });
    }

    function getFormattedDate(value) {
        if (value) {
            return `${value.$y}/${value.$M+1}/${value.$D}`
        }
        return ''
    }

    async function handleClick(e) {
        e.preventDefault();
        await insertUser(dataForm);
        setUserList([...userList, dataForm]);
        resetDataForm()
        alert(`User ${dataForm.name} cadastrado com sucesso.`)
    }

    const context = {
        dataForm: dataForm,
        userList: userList,
        handleChange: handleChange,
        handleClick: handleClick,
        resetDataForm: resetDataForm,
        getFormattedDate: getFormattedDate,
    };

    return (
        <UserContext.Provider value={context}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;