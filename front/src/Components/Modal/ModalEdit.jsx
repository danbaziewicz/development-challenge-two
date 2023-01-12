import { Box, Button, Typography, Modal, TextField } from '@mui/material';
import DatePicker from "../../Components/DatePicker/DatePicker.jsx"
import { useContext, useState, useEffect } from 'react'
import S from '../Modal/StyleModal.module.css'
import { UserContext } from '../../context/UserProvider.jsx';
import { updateUser } from '../../Service/Service.jsx';
import moment from 'moment';
import styles from './Styles'

const ModalEdit = (obj) => {
    const dataNascimento = moment(obj.birth_date).utc().format("DD/MM/YYYY")
    const { resetDataForm, getFormattedDate }= useContext(UserContext);
    const [open, setOpen] = useState(false);
    const [formPut, setFormPut] = useState({})
    useEffect(()=>{
        setFormPut(obj)
    }, [open])

    async function editUser (e) {
        e.preventDefault()
        const body = {...formPut}
        await updateUser(obj.id, body)
        setOpen(false)
        obj.setReload(true)
        resetDataForm()
    }

    function handleChangeUpdate(value, key) {
        setFormPut({...formPut, [key]: value});
    }

    function handleCancel() {
        setOpen(false)
        resetDataForm()
    }

    return (
        <div>
            <Button sx={{backgroundColor: '#009adf', borderRadius: '7px'}}
            variant='contained'
            onClick={() =>
            setOpen(true)}>Editar</Button>
            <Modal className={S.divDados} hideBackdrop sx={{ backgroundColor: 'white' }} open={open} onClose={()=>setOpen(false)}>
                <Box className={S.boxModal}>
                    <div className={S.divClientes}>
                        <h2>Editar</h2>
                    </div>
                    <TextField
                        sx={styles.textField}
                        disabled
                        id="outlined-basic"
                        label="ID Cliente"
                        value={formPut.id}
                        />
                    <TextField
                        sx={styles.textField}
                        id="outlined-required"
                        required
                        label="Nome"
                        name="name"
                        variant="outlined"
                        value={formPut.name}
                        onChange={(e) => handleChangeUpdate(e.target.value, "name")}
                        />
                    <DatePicker
                        value={formPut.birth_date}
                        onChange={(value) => {handleChangeUpdate(getFormattedDate(value), "birth_date")}}
                    />

                    <TextField
                        sx={styles.textField}
                        id="outlined-required"
                        required
                        label="Email"
                        name="email"
                        variant="outlined"
                        value={formPut.email}
                        onChange={(e) => handleChangeUpdate(e.target.value, "email")}
                        />
                    <TextField
                        sx={styles.textField}
                        required
                        id="outlined-required"
                        label="Endereço"
                        name="address"
                        variant="outlined"
                        value={formPut.address}
                        onChange={(e) => handleChangeUpdate(e.target.value, "address")}
                        />
                    <Typography>Confirmar alterações?</Typography>
                    <div className={S.buttons}>
                        <Button sx={{backgroundColor: '#009adf', borderRadius: '7px', margin: '0px 3px'}} variant='contained' onClick={(e) => editUser(e)}>Confirmar</Button>
                        <Button sx={{borderRadius: '7px', margin: '0px 3px'}} color="error" variant='outlined' onClick={handleCancel}>Cancelar</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default ModalEdit;