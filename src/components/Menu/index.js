import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assests/Img/Logo.lucasflix.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu () {
    return (
        <nav className="Menu">
            <Link to="\">
                <img className="Logo" src={Logo} alt="LucasFLix logo" />
            </Link>
            
            <Button as={Link} className="ButtonLink" to="/cadastro/video"> 
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;