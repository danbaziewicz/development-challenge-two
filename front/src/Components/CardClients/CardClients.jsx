import React from 'react'
import S from './CardClients.module.css'

const CardClients = ( 
    obj) => {
  return (
    <div className={S.divCard}>
        <h2>{obj.name}</h2>
        <p>
            <b>Nascimento: </b>
            {obj.birth_date}
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
  )
}

export default CardClients