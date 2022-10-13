import React, { useState } from 'react'
import { useEffect } from 'react';
import CardClients from '../../Components/CardClients/CardClients';
import S from "../Clientes/Clientes.module.css"
import {getUser} from "../../Service/Service"

const Clientes = () => {
    const [users, setUsers] = useState([]);
    const [reload, setReload] = useState(false);
    
    const request = async (close) => {
      const response = await getUser(close)
      setUsers(response)
    }

    useEffect(() => {
      request("/users")
    }, [])

    useEffect(()=> {
      if(reload) {
        request("/users")
        setReload(false)
      }
    }, [reload])

  return (
    <div>
        <h2>Clientes</h2>
        <div className={S.card}>
        {users.length > 0 ? (
          users.map((cliente, index) => {
            return (
              <CardClients
                key={index}
                name={cliente.name}
                birth_date={cliente.birth_date}
                email={cliente.email}
                address={cliente.address}
              />
            );
          })
        ) : (
          <h3 className={S.msgEnd}>Nada foi encontrado</h3>
        )}
      </div>
    </div>
  )
}

export default Clientes