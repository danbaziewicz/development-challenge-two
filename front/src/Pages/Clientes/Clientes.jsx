import React, { useContext } from 'react'
import CardClients from '../../Components/CardClients/CardClients';
import { UserContext } from "../../context/UserProvider";
import S from "../Clientes/Clientes.module.css"

const Clientes = () => {
    const { userList } = useContext(UserContext)
  return (
    <div>
        <h2>Clientes</h2>
        <div className={S.card}>
        {userList.length > 0 ? (
          userList.map((cliente, index) => {
            return (
              <CardClients
                key={index}
                name={cliente.name}
                bith_date={cliente.birth_date}
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