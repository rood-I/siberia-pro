import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
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
                <a href="#" className="btn-main-offer">Написать нам</a>
            </div>
        </div>
    )
}

export default Header
