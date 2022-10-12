import React from "react";
import { Link } from "react-router-dom";
import S from "./Header.module.css"

const Header = () => {
    return (
        <header className={S.header}>
            <img className={S.img} src="https://medcloud.link/svgs/medcloud.svg" alt="medcloud logo svg" />
                <nav>
                    <Link className={S.link} to={"/"}>
                        Home
                    </Link>
                    <Link className={S.link} to={"/cadastro"}>
                        Cadastro
                    </Link>
                    <Link className={S.link}>
                        RIS
                    </Link>
                    <Link className={S.link}>
                        PACS
                    </Link>
                    <Link className={S.link}>
                        Portal
                    </Link>
                    <Link className={S.link}>
                        Contato
                    </Link>
                </nav>
            <div className={S.divButton}>
                <button>Testar grátis</button>
                <button>Entrar</button>
            </div>
        </header>
    )
}

export default Header;