import React from 'react';
import Logo from '../../assets/logo.png';
import './Menu.css';
import ButtonLink from './Buttons';

function Menu() {
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo}/>
            </a>
            <ButtonLink href="/" className="ButtonLink">
                Novo Video
            </ButtonLink>
        </nav>
    );
}
export default Menu;
