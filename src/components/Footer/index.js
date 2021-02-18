import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';
import './footer.css';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img className="Logo" src={Logo} alt="Logo " />
      </a>
      <p>
        Projeto criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
