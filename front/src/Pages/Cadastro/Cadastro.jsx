import { Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import DatePicker from "../../Components/DatePicker/DatePicker.jsx"
import S from "../Cadastro/Cadastro.module.css"

const Cadastro = () => {
    const { dataForm, handleChange, handleClick, getFormattedDate } = useContext(UserContext);

    return (
        <div className={S.divForm}>
            <form>
                <h2>Cadastro</h2>
                <TextField
                    sx={{ width: '250px', padding: '10px'}}
                    id="outlined-basic"
                    required
                    label="Nome"
                    name="name"
                    variant="outlined"
                    value={dataForm.name}
                    onChange={(e) => handleChange(e.target.value, "name")}
                />

                <DatePicker
                    value={dataForm.birth_date}
                    onChange={(value) => handleChange(getFormattedDate(value), "birth_date")}
                />

                <TextField
                    sx={{ width: '250px', padding: '10px'}}
                    id="outlined-basic"
                    required
                    label="Email"
                    name="email"
                    variant="outlined"
                    value={dataForm.email}
                    onChange={(e) => handleChange(e.target.value, "email")}
                />
                <TextField
                    sx={{ width: '250px', padding: '10px'}}
                    required
                    id="outlined-basic"
                    label="Endereço"
                    name="address"
                    variant="outlined"
                    value={dataForm.address}
                    onChange={(e) => handleChange(e.target.value, "address")}
                />
                <Button sx={{backgroundColor: '#009adf', borderRadius: '7px', margin: '20px 0px'}} variant="contained" onClick={handleClick}>Cadastrar</Button>
            </form>
        </div>
    )
}

export default Cadastro;