import React, {createContext, useState} from "react";
import {insertUser} from "../Service/Service.jsx"

export const UserContext = createContext();

const UserProvider = ({children}) => {
    const [dataForm, setDataForm] = useState({
        name: "",
        birth_date: "",
        email: "",
        address: "",   
    })

    const [userList, setUserList] = useState([]);

    function handleChange(e, key) {
        setDataForm({...dataForm, [key]: e.target.value});
    }

    function handleClick(e) {
        e.preventDefault();
        insertUser(dataForm);
        setUserList([...userList, dataForm]);
        setDataForm({
            name: "",
            birth_date: "",
            email: "",
            address: ""   
        });
        alert(`User ${dataForm.name} cadastrado com sucesso.`)
    }

    const context = {
        dataForm: dataForm,
        userList: userList,
        handleChange: handleChange,
        handleClick: handleClick,
    };

    return (
        <UserContext.Provider value={context}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;