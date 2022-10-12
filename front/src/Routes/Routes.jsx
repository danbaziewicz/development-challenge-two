import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Header from "../Components/common/Header/Header";
import Cadastro from "../Pages/Cadastro/Cadastro";
import { Home } from "../Pages/Home/Home";

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' element={<Home/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;