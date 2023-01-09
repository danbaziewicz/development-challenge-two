import { Box, Button, Typography, Modal } from '@mui/material';
import { useState } from 'react'
import { deleteUser } from '../../Service/Service';
import S from '../Modal/StyleModal.module.css'

const ModalDelete = (obj) => {
    const [open, setOpen] = useState(false);

    const handleDelete = async () => {
        await deleteUser(obj.id)
        console.log(obj)
        setOpen(false)
        obj.setReload(true)

    }

    return (
        <div>
            <Button sx={{borderRadius: '7px'}} color="error" variant='outlined' onClick={() => setOpen(true)}>Deletar</Button>

            <Modal className={S.divDados} open={open} onClose={()=>setOpen(false)}>
                <Box className={S.boxDelete} sx={{backgroundColor: "#f7f7f7"}}>
                    <Typography sx={{fontSize: "20px"}}>Tem certeza que deseja deletar?</Typography>

                    <div className={S.buttons}>
                        <Button sx={{backgroundColor: '#009adf', borderRadius: '7px', margin: '0px 3px'}} variant='contained' onClick={handleDelete}>Confirmar</Button>
                        <Button sx={{borderRadius: '7px', margin: '0px 3px'}} color="error" variant='outlined' onClick={() => setOpen(false)}>Cancelar</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default ModalDelete;