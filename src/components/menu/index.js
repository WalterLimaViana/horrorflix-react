import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <Link to='/'>
                <img className="Logo" src={Logo} alt="Horrorflix logo"></img>
            </Link>

            <Button as={Link} className="ButtonLink Inicio" to="/">
                Ínicio
            </Button>
            <Button as={Link} className="ButtonLink" to="/">
                Séries
            </Button>
            <Button as={Link} className="ButtonLink" to="/">
                Filmes
            </Button>
            <Button as={Link} className="ButtonLink" to="/">
                Documentários
            </Button>
            <Button as={Link} className="ButtonLink NovoVideo" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;
