import React from 'react'

const CardClients = ( 
    obj) => {
  return (
    <div>
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