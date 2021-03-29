import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';
import './footer.css';

function Footer() {
  return (
    <FooterBase>
      <img className="Logo" src={Logo} alt="Logo " />
      <p>
        Projeto criado por Marcelo durante a
        Imersão React da Alura
      </p>
    </FooterBase>
  );
}

export default Footer;
