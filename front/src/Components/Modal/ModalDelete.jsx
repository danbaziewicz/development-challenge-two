import { Box, Button, Typography, Modal } from '@mui/material';
import { useState } from 'react'
import { deleteUser } from '../../Service/Service';
import S from '../Modal/StyleModal.module.css'
import styles from '../../Styles/Styles'

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
            <Button sx={styles.buttonError} color="error" variant='outlined' onClick={() => setOpen(true)}>Deletar</Button>

            <Modal className={S.divDados} open={open} onClose={()=>setOpen(false)}>
                <Box className={S.boxDelete}>
                    <Typography sx={{fontSize: "20px"}}>Tem certeza que deseja deletar?</Typography>

                    <div className={S.buttons}>
                        <Button sx={styles.button} variant='contained' onClick={handleDelete}>Confirmar</Button>
                        <Button sx={styles.buttonError} color="error" variant='outlined' onClick={() => setOpen(false)}>Cancelar</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default ModalDelete;