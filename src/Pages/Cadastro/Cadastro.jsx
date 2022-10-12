import { TextField } from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import DatePicker from "../../Components/DatePicker/DatePicker.jsx"
import S from "../Cadastro/Cadastro.module.css"

const Cadastro = () => {
    const { dataForm, handleChange } = useContext(UserContext);

    return (
        <div className={S.divForm}>
            <form>
                <TextField
                    sx={{ width: '250px', padding: '10px'}}
                    id="outlined-basic"
                    required
                    label="Nome"
                    name="name"
                    variant="outlined"
                    value={dataForm.name}
                    onChange={(e) => handleChange(e, "name")} 
                />
                
                <DatePicker />

                <TextField 
                    sx={{ width: '250px', padding: '10px'}}
                    id="outlined-basic"
                    required
                    label="Email"
                    name="email"
                    variant="outlined"
                    value={dataForm.email}
                    onChange={(e) => handleChange(e, "email")}
                />
                <TextField 
                    sx={{ width: '250px', padding: '10px'}}
                    required
                    id="outlined-basic"
                    label="Endereço"
                    name="address"
                    variant="outlined"
                    value={dataForm.address}
                    onChange={(e) => handleChange(e, "address")}
                />
            </form>
        </div>
    )
}

export default Cadastro;