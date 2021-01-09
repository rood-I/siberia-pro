import React from "react";
import { Link } from "react-scroll";
import Typed from "react-typed";
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className="header-wrapper">

            <Navbar />
            <div className="main-info">
                <canvas></canvas>
                <h1>Мы делаем рекламу</h1>
                <Typed
                    className="typed-text"
                    strings={["Производство наружней рекламы",
                        "Объемные буквы",
                        "Таблички",
                        "Баннера",
                        "Создание логотипов"]}
                    typeSpeed={60}
                    backSpeed={50}
                    loop
                />
                <Link smooth={true} to="form" href="#" className="btn-main-offer">Написать нам</Link>
            </div>
        </div>
    )
}

export default Header
