import { Box, Button, Typography, Modal, TextField } from '@mui/material';
import DatePicker from "../../Components/DatePicker/DatePicker.jsx"
import { useContext, useState } from 'react'
import S from '../Modal/StyleModal.module.css'
import { UserContext } from '../../context/UserProvider.jsx';
import { updateUser } from '../../Service/Service.jsx';
import moment from 'moment';

const ModalEdit = (obj) => {
    const dataNascimento = moment(obj.birth_date).format("DD/MM/YYYY")
    const {dataForm}= useContext(UserContext);
    const [open, setOpen] = useState(false);
    const [formPut, setFormPut] = useState({
        name: "",
        birth_date: "",
        email: "",
        address: ""
    })

    function editUser (e) {
        e.preventDefault()
        const body = {...formPut}
        body.birth_date = dataForm.birth_date;
        updateUser(obj.id, body)
        obj.setReload(true)
        setOpen(false)
    }

    function handleChangeUpdate(e, key) {
        setFormPut({...formPut, [key]: e.target.value});
        console.log(e.target.value)
    }

    return (
        <div>
            <Button sx={{backgroundColor: '#009adf', borderRadius: '7px'}} variant='contained' onClick={() => setOpen(true)}>Editar</Button>
            <Modal className={S.divDados} hideBackdrop sx={{ backgroundColor: 'white' }} open={open} onClose={()=>setOpen(false)}>
                <Box className={S.boxModal}>
                    <div className={S.divClientes}>
                        <h2>{obj.name}</h2>
                        <p>
                            <b>Nascimento: </b>
                            {dataNascimento}
                        </p>
                        <p>
                            <b>Email: </b>
                            {obj.email}
                        </p>
                        <p>
                            <b>Endereço: </b>
                            {obj.address}
                        </p>
                    </div>
                    <TextField
                        sx={{ width: '250px', padding: '10px'}}
                        disabled
                        id="outlined-basic"
                        label="ID Cliente"
                        value={obj.id}
                        />
                    <TextField
                        sx={{ width: '250px', padding: '10px'}}
                        id="outlined-required"
                        required
                        label="Nome"
                        name="name"
                        variant="outlined"
                        value={formPut.name}
                        onChange={(e) => handleChangeUpdate(e, "name")} 
                        />
                    <DatePicker />

                    <TextField 
                        sx={{ width: '250px', padding: '10px'}}
                        id="outlined-required"
                        required
                        label="Email"
                        name="email"
                        variant="outlined"
                        value={formPut.email}
                        onChange={(e) => handleChangeUpdate(e, "email")}
                        />
                    <TextField 
                        sx={{ width: '250px', padding: '10px'}}
                        required
                        id="outlined-required"
                        label="Endereço"
                        name="address"
                        variant="outlined"
                        value={formPut.address}
                        onChange={(e) => handleChangeUpdate(e, "address")}
                        />
                    <Typography>Confirmar alterações?</Typography>
                    <div className={S.buttons}>
                        <Button sx={{backgroundColor: '#009adf', borderRadius: '7px', margin: '0px 3px'}} variant='contained' onClick={(e) => editUser(e)}>Confirmar</Button>
                        <Button sx={{borderRadius: '7px', margin: '0px 3px'}} color="error" variant='outlined' onClick={() => setOpen(false)}>Cancelar</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default ModalEdit;