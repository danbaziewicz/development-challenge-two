import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Header from "../Components/common/Header/Header";
import Cadastro from "../Pages/Cadastro/Cadastro";
import Clientes from "../Pages/Clientes/Clientes";
import { Home } from "../Pages/Home/Home";

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' element={<Home/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path='/clientes' element={<Clientes/>}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;