import React from "react";
import logo from "../images/logo.png";
import {Link} from "react-scroll";
//FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="Siberia pro" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link smooth={true} to="work" offset={0} className="nav-link" href="#">Работы</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="clients" offset={10} className="nav-link" href="#">Клиенты</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="contacts" offset={0} className="nav-link" href="#">Контакты</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
