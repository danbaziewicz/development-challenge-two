import React from 'react'
import ModalDelete from '../Modal/ModalDelete'
import ModalEdit from '../Modal/ModalEdit'
import S from './CardClients.module.css'
import moment from 'moment';


const CardClients = ( 
    obj) => {
  const dataNascimento = moment(obj.birth_date).utc().format("DD/MM/YYYY")
  return (
    <div className={S.divCard}>
        <h2> {obj.name}</h2>
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
        <p>
            <b>ID: </b>
            {obj.id}
        </p>
        <div className={S.divModals}>
            <ModalEdit name={obj.name}
                birth_date={obj.birth_date}
                email={obj.email}
                address={obj.address}
                id={obj.id}
                setReload={obj.setReload}/>
            <ModalDelete id={obj.id} setReload={obj.setReload}/>
        </div>
    </div>
  )
}

export default CardClients