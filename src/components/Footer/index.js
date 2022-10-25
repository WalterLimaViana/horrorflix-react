import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/walter-lima-viana/">
        <img width="10%" src={Logo} alt="Logo Alura" />
      </a>
      <p>
        Desenvolvido por
        {' '}
        <a href="https://github.com/WalterLimaViana">
          Walter Lima
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
