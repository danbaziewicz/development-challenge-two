import React from 'react'

const CardClients = ( 
    name,
    birth_date,
    email,
    address) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>
            <b>Nascimento:</b>
            {birth_date}
        </p>
        <p>
            <b>Email:</b>
            {email}
        </p>
        <p>
            <b>Endereço</b>
            {address}
        </p>
    </div>
  )
}

export default CardClients