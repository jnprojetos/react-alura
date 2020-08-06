import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Menu.css';
import ButtonLink from './Buttons';

function Menu() {
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo AluraFlix"/>
            </Link>
            <ButtonLink as={Link} className="ButtonLink" to="/cadastro/video">
            </ButtonLink>
        </nav>
    );
}
export default Menu;
